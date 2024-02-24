import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import BiLinkExternal from '@meronex/icons/bi/BiLinkExternal';

import React, { useEffect } from 'react'
import Container from '../../Container'
import AssetForm from '../../SponsorForm';
import AssetUpdateForm from './UpdateAssetForm';
import Modal from '../../Modal';
import MdcPlus from '@meronex/icons/mdc/MdcPlus';
import Form from './CreateForm'
// import SponsorAssetForm from '../../SponsorAssetForm'

function CreateForm({ isOpen, setIsOpen, create }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className="flex-row w-full">
        <h3 className="text-xl font-semibold mb-6">
          Create new Sponsor
        </h3>

        <Form create={create} onSuccess={() => setIsOpen(false)} />
      </div>
    </Modal>
  )
}

function UpdateForm({ asset, setEditAsset, update }) {
  return (
    <Modal isOpen={Boolean(asset)} onRequestClose={() => setEditAsset(null)} z="30">
      <div className="flex-row w-full">
        <h3 className="text-sm text-textGray font-bold mb-6">
          Update Asset
        </h3>

        <AssetUpdateForm asset={asset} update={update} onSuccess={() => setEditAsset(null)} />
      </div>
    </Modal>
  )
}


function AssetRow({ asset, onRemove, onEdit }) {
  const { id, name, bundle_type, asset_type, asset_url, asset_thumb_url, company_id, is_default, folder } = asset;

  return (

    <div className="hover:bg-gray-100  min-w-max p-5 flex-row items-center justify-center">
      <div className="flex justify-center items-center">
        {asset_thumb_url &&
          <img onClick={() => onEdit(asset)} className="max-h-20" src={asset_thumb_url} alt="thumbnail" />
        }
      </div>
    </div>
  )
}

function AssetListRow({ asset, onRemove, onEdit }) {
  const { id, name, bundle_type, asset_type, asset_url, asset_thumb_url, company_id, is_default, folder } = asset;

  return (

    <div onClick={() => onEdit(asset)} className="max-w-5xl hover:border-greenSqill-300 border-2 border-transparent py-2 pt-2 my-2 items-center justify-center flex rounded-full  bg-white">
      <div className="text-xs font-bold text-textGray w-1/4">
        {id}
      </div>
      <div className="w-1/4 text-xs font-normal text-textGray flex justify-center">
        <div> {name} </div>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        {asset_thumb_url &&
          <img className="max-h-10" src={asset_thumb_url} alt="thumbnail" />
        }
      </div>
      <div className="w-1/4 text-xs font-normal text-containerGray flex justify-center">
        <button onClick={() => onRemove(id)} > X</button>
      </div>
    </div>
  )
}


function SponsorRow({ id, name, email, url, sponsor, onRemove, onCreateAsset, onRemoveAsset, onEditAsset, list }) {
  return (
    <div className='mr-5'>
    <Container
    title={name}
    list={list}
     handleRemove={onRemove}
    // handleEdit={handleEdit}
    handleCreate={onCreateAsset}
    renderRows={assets => assets.map(asset => (
      <AssetRow key={asset.id} asset={asset} onRemove={onRemoveAsset} onEdit={onEditAsset} />
    ))}
    renderList={assets => assets.map(asset => (
      <AssetListRow key={asset.id} asset={asset} onRemove={onRemoveAsset} onEdit={onEditAsset} />
    ))}
    columns={["Element ID", "Name", "Thumbnail", "Delete"]}
    FormComponent={AssetForm}
    formProps={{sponsor}}
    containerClass={"py-5 overflow-x-auto h-96 w-96 grid grid grid-rows-2 grid-flow-col gap-4 content-start"}
    parentClass={'max-w-min'}
  />
  </div>
  )
}

export default function SponsorsList({ list, remove, assetlist, assetCreate, assetRemove, assetEdit, create }) 
{
  const [editAsset, setEditAsset] = React.useState(null)
  const [isOpen, setIsOpen] = React.useState(false)

  function handleRemove(id) {
    remove(id)
  }
  function handleEdit(asset) {
    setEditAsset(asset)
  }
  return (
    <React.Fragment>
      <UpdateForm asset={editAsset} update={assetEdit} setEditAsset={setEditAsset} />
      <div className='flex justify-between pt-10'>
      <div className='py-5 font-bold text-textGray'>
        Overview
      </div>
      <div>
      </div>
      <div className='pr-5 content-center justify-center'>
      <button onClick={() => setIsOpen(true)} type="button" className="w-1/2 gradient text-white bg-primary-600 hover:bg-primary-700 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
        <MdcPlus className="text-xl" />
        Create Sponsor
      </button>
      </div>
      </div>
      <div className="overflow-x-auto flex mb-5 pr-5 pb-10">
        {list?.map(sponsor => <SponsorRow key={sponsor.id} sponsor={sponsor} {...sponsor} onRemove={handleRemove} onCreateAsset={assetCreate} onRemoveAsset={assetRemove} onEditAsset={handleEdit} list={assetlist.filter(asset => asset.is_sponsor_asset && asset.sponsor.id === sponsor.id)} />)}
      </div>
      <CreateForm isOpen={isOpen} setIsOpen={setIsOpen} create={create} />
    </React.Fragment>
  )
}