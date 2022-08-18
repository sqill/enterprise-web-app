import { useEffect, useState } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import CuratedPostsList from "../../components/Dashboard/CuratedPosts/List"
import { getCuratedCategories } from "../../api"

export default function CuratedDatabase() {
  const [categories, setCategories] = useState([])

  useEffect(async () => {
    const { success, data } = await getCuratedCategories()

    if (success) {
      setCategories(data.data)
    }
  }, [])

  return (
    <DashboardLayout hideFooter>
      <CuratedPostsList categories={categories} />
    </DashboardLayout>
  )
}