import { GetStaticProps, NextPage } from 'next'
import { HomePage } from 'pages'
import { HomePageProps } from 'pages/HomePage/HomePage'
import { getProducts } from 'shared/api/getProducts'

const Home: NextPage<HomePageProps> = ({ products }) => (
  <HomePage products={products} />
)

export const getServerSideProps: GetStaticProps = async () => {
  const { data } = await getProducts()

  const products = data
  return {
    props: {
      products,
    },
  }
}
export default Home
