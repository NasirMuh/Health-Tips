import React, { useState } from 'react'
import Navbar from './Navbar'
const Menu = [
  {
      id: 1,
      name: "Strawberry-Watermelon Smoothie",
      category: "Break-fast",
      description: "If there’s anything more refreshing than a bright pink two-fruit smoothie, we don’t know what it is! Plus, it makes for a nice, cooling start to your day"
  },
  {
      id: 2,
      name: "Spinach Frittata for a Crowd",
      category: "Break-fast",
      description: "We love to make something special for a holiday breakfast, especially if we’ve got guests. But if you’re not feeding a crowd, you can halve this recipe and bake it in an 8-inch square baking pan."
  },
  {
      id: 3,
      name: "Banana Banana Bread",
      category: "Break-fast",
      description: "Five bananas might sound bananas to you, but that’s the amount we’ve landed on for perfectly moist, naturally sweet banana bread"
  },
  {
      id: 4,
      name: "Egg Quesadilla",
      category: "Break-fast",
      description: "This yummy breakfast dish is like a cross between a grilled cheese sandwich and a scrambled egg — and it’s packed with protein to energize you for your school day."
  },
  {
      id: 5,
      name: "Lemon-Glazed Chicken Wings",
      category: "Dinner",
      description: "Instead of marinating the chicken, we dress it after it’s been cooked, when it’s still hot and can absorb the marinade through and through."
  },
  {
      id: 6,
      name: "Sloppy Joes",
      category: "Dinner",
      description: "Photo booth fam kinfolk  jianbing microdosing tousled waistcoat."
  },
  {
      id: 7,
      name: "Skillet Elote",
      category: "Dinner",
      description: "Elote is a kind of seasoned corn on the cob that you can buy from street vendors in Mexico"
  },
  {
      id: 8,
      name: "Green and White Bean Salad",
      category: "Lunch",
      description: "Feel free to turn our zippy two-bean salad into a three-bean salad by adding an extra can of another kind of beans—just increase the seasoning a little bit if you do."
  },
  {
      id: 9,
      name: "Lemony Kale and Chickpea Salad",
      category: "Lunch",
      description: "Have you heard of people “massaging” the kale for their salads? We’re just using a spoon here—or tongs—but the idea is the same: Stir the raw leaves with lemon juice, oil"
  },
  {
      id: 10,
      name: "Creamy Coleslaw",
      category: "Lunch",
      description: "This is a classic summer side dish. We don’t usually call for bags of vegetables that are already cut, but we make an exception for coleslaw because it’s tricky to cut cabbage very thinly. If you want to give it a try, shred 1/2 head of green or red cabbage and 1 carrot for this recipe."
  },
  {
      id: 11,
      name: "Classic Tomato Soup",
      category: "Lunch",
      description: "You’ll love this tangy, creamy soup as is, but you’ll also love it when you add any of the optional ingredients on the bottom of the page"
  }

];


const getAllfillterValue = [...new Set(Menu.map((curvals) => curvals.category)), "All"]
const ShopItems = () => {
  const [itemss, setItemss] = useState(Menu);
  const [itemHead, setItemHead] = useState(getAllfillterValue);
  const filterItems = (curVal) => {
    if (curVal === "All") {
      setItemss(Menu)
      return;
    }
    const updatedItems = Menu.filter((curElement) => {
      return curElement.category === curVal
    });
    setItemss(updatedItems)
  }
  return (
    <>
      <div className='mb-32'>
        <Navbar filterItems={filterItems} itemHead={itemHead} />
        <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Favirate Dish</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">All Dishes are very helpful our health.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {
                            itemss.map((curValue) => {
                                const { id, name, category, description } = curValue;
                                return (
                                    <div key={id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-1 rounded-lg">
                                            <div className="flex-grow ml-2">
                                                <h2 className="text-gray-900 title-font font-medium">{name}</h2>
                                                <p className="text-gray-500">{category}</p>
                                                <p className="text-gray-500">{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
      </div>
    </>
  )
}

export default ShopItems