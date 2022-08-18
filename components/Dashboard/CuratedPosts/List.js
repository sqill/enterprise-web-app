import Carousel from 'nuka-carousel';

import BiChevronLeft from '@meronex/icons/bi/BiChevronLeft';
import BiChevronRight from '@meronex/icons/bi/BiChevronRight';

const DEFAULT_IMAGE = "/images/testemunho.jpg"

function Post({ post }) {
  const style = {
    backgroundImage: `url(${post.image?.url || DEFAULT_IMAGE})`
  }

  return (
    <div className="bg-gray-200 rounded-lg p-5 pb-2">
      <div className="bg-gray-400 h-80 rounded-lg mb-4 bg-cover bg-center" style={style} />
      <h3 className="font-bold truncate">{post.title}</h3>
    </div>
  )
}

const Arrow = ({ onClick, Icon }) => (
  <button className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400" onClick={onClick}>
    <Icon className="text-gray-400 text-3xl hover:text-gray-200" />
  </button>
)

function CategoryPosts({ posts }) {
  return (
    <div className="">
      <Carousel
        slidesToShow={4}
        cellSpacing={32}
        renderBottomCenterControls={null}
        renderCenterLeftControls={({ currentSlide, previousSlide }) => (
          currentSlide > 0 && <Arrow Icon={BiChevronLeft} onClick={previousSlide} />
        )}
        renderCenterRightControls={({ currentSlide, nextSlide }) => (
          (currentSlide < posts.length - 1) && <Arrow Icon={BiChevronRight} onClick={nextSlide} />
        )}
      >
        {posts.slice(0).reverse().map(p => <Post key={p.id} post={p} />)}
      </Carousel>
    </div>
  )
}

function Category({ category }) {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      <CategoryPosts posts={category.curated_posts} />
    </div>
  )
}

export default function CuratedPostsList({ categories }) {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-8">Trends</h1>
      {categories.map(c => <Category key={c.id} category={c} />)}
    </div>
  )
}
