import React from "react"

import Layout from "../components/Layout/Page/Page"
import SEO from "../components/Seo/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`data`, `translator`, `renci`]} />
    <h1>Data Translator</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sed deleniti, nihil dolor culpa perferendis vitae a dolore ut earum!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque modi sint possimus explicabo delectus, perferendis neque, amet doloribus aut adipisci ipsam veritatis deserunt eveniet fugit expedita ducimus molestias! Dicta itaque mollitia accusamus doloremque iure, atque nisi reiciendis, voluptatum repellendus aut nostrum laborum beatae necessitatibus nobis ut consectetur praesentium. Laboriosam nostrum, illum accusantium magnam ducimus perspiciatis deleniti ex. Ipsam excepturi optio in assumenda provident, illum alias odio architecto itaque voluptas!</p>
  </Layout>
)

export default IndexPage
