import useSWR from 'swr'
import List from '../components/list';
async function fetcher(url) {
  const response = await fetch(url)
  return response.json();
}

function getCurrentDate() {
  const { data, error } = useSWR('http://localhost:3001/crypto', fetcher)
  return {
    cryptos: data,
    error,
    isLoading: !error && !data,
  }
}

export default function CurrentDate() {
  const { cryptos, error, isLoading } = getCurrentDate()
  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>There has been an error</h1>
      ) : (
        List({items: cryptos})
      )}
    </>
  )
}
