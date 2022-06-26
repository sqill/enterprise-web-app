import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import AdPostsList from "../../components/Dashboard/AdPosts/List"
import AdPostsHeader from "../../components/Dashboard/AdPosts/Header"

import adPostsStore from '../../stores/ad_posts'

export default function AdPosts() {
  const { list, fetch, create, remove } = adPostsStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout hideFooter>
      <AdPostsHeader create={create} />
      <AdPostsList list={list} remove={remove} />
    </DashboardLayout>
  )
}