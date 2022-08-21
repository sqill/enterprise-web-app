import { useState } from 'react'
import Carousel from 'nuka-carousel';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';
import Image from 'next/image'


import BiChevronLeft from '@meronex/icons/bi/BiChevronLeft';
import BiChevronRight from '@meronex/icons/bi/BiChevronRight';

const DEFAULT_IMAGE = "/images/testemunho.jpg"


function embedComponent(platform) {
  switch (platform) {
    case 'instagram':
      return InstagramEmbed;

    case 'tiktok':
      return TikTokEmbed;

    default:
      return null;
  }
}

function PostPreview({ post, setOpenedPost }) {
  const style = {
    backgroundImage: `url(${post.image?.url || DEFAULT_IMAGE})`
  }

  function open() {
    setOpenedPost(post)
  }

  return (
    <div className="bg-gray-200 rounded-lg p-5 pb-2 cursor-pointer" onClick={open}>
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

function CategoryPosts({ posts, setOpenedPost }) {
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
        {posts.slice(0).reverse().map(p => <PostPreview key={p.id} post={p} setOpenedPost={setOpenedPost} />)}
      </Carousel>
    </div>
  )
}

function Category({ category, setOpenedPost }) {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      <CategoryPosts posts={category.curated_posts} setOpenedPost={setOpenedPost} />
    </div>
  )
}

function PostModal({ post, onClose }) {
  const SocialComp = embedComponent(post.platform)

  return (
    <div className="fixed z-30 inset-0 overflow-y-auto font-montserrat" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div onClick={onClose} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-32 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-6 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start sm:flex-col">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/2 pr-2">
                  {post.url && SocialComp ? (
                    <SocialComp url={post.url} width="100%" />
                  ) : (
                    <Image src={post.image?.url || DEFAULT_IMAGE }/>
                  )}
                </div>
                <div className="flex flex-col sm:w-1/2 pl-2">
                  <p className="mb-6">{post.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold">Platform</h4>
                    <p>{post.platform}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold">Level</h4>
                    <p>{post.level}</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className='ql-editor mt-6'>
                <div dangerouslySetInnerHTML={{__html: post.content}} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CuratedPostsList({ categories }) {
  const [openedPost, setOpenedPost] = useState()

  return (
    <div className="p-8">
      {openedPost && <PostModal post={openedPost} onClose={() => setOpenedPost(null)} />}
      <h1 className="text-5xl font-bold mb-8">Trends</h1>
      {categories.map(c => <Category key={c.id} category={c} setOpenedPost={setOpenedPost} />)}
    </div>
  )
}
