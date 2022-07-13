import { Directus } from '@directus/sdk'

const useUrl = () => import.meta.env.VITE_DIRECTUS_URL.toString()
const useDirectus = () => useState('directus', () => new Directus(useUrl()))
const useCollection = (collection) => useDirectus().value.items(collection)
const useQuery = async (collection, query) => (await useState('directusQuery-' + collection + '-' + JSON.stringify(query), () => useCollection(collection).readByQuery(query)).value).data
const useItems = (collection, limit = 100, page = 1) => useQuery(collection, { limit, page })
const useItem = (collection, id = 1) => useState('directusItem-' + collection + '-' + id, () => useCollection(collection).readOne(id)).value
const useSingleton = (collection) => useState('directusSingleton-' + collection, () => useDirectus().value.singleton(collection).read()).value

const useImage = () => (uuid, key) => useUrl() + '/assets/' + uuid + (typeof key === 'string' ? ('?key=' + key) : '')

export { useUrl, useDirectus, useCollection, useSingleton, useItems, useItem, useQuery, useImage }
