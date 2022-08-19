import React, { useState } from 'react'
import Menus from './menu'
import ItemCate from './itemsCate'
import Navbar from './Navbar'

const getAllfillterValue = [...new Set(Menus.map((curvals) => curvals.category)), "All"]
const ShopItems = () => {
  const [itemss, setItemss] = useState(Menus);
  const [itemHead, setItemHead] = useState(getAllfillterValue);
  const filterItems = (curVal) => {
    if (curVal === "All") {
      setItemss(Menus)
      return;
    }
    const updatedItems = Menus.filter((curElement) => {
      return curElement.category === curVal
    });
    setItemss(updatedItems)
  }
  return (
    <>
      <div className='mb-32'>
        <Navbar filterItems={filterItems} itemHead={itemHead} />
        <ItemCate itemss={itemss} />
      </div>
    </>
  )
}

export default ShopItems