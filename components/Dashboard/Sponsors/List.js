import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import BiLinkExternal from '@meronex/icons/bi/BiLinkExternal';

import React, { useEffect } from 'react'
import Container from '../../Container'
import AssetForm from '../../SponsorForm';
import AssetUpdateForm from './UpdateAssetForm';
import Modal from '../../Modal';
// import SponsorAssetForm from '../../SponsorAssetForm'

function UpdateForm({ asset, setEditAsset, update }) {
  return (
    <Modal isOpen={Boolean(asset)} onRequestClose={() => setEditAsset(null)} z="40">
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


function SponsorRow({ id, name, email, url, onRemove, onCreateAsset, onRemoveAsset, onEditAsset, list }) {
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
    formProps={{name}}
    containerClass={"py-5 overflow-x-auto h-96 w-96 grid grid grid-rows-2 grid-flow-col gap-4 content-start"}
    parentClass={'max-w-min'}
  />
  </div>
  )
}

export default function SponsorsList({ list, remove, assetlist, assetCreate, assetRemove, assetEdit }) {
  const [editAsset, setEditAsset] = React.useState(null)

  function handleRemove(id) {
    remove(id)
  }
  function handleEdit(asset) {
    setEditAsset(asset)
  }
  return (
    <React.Fragment>
      <UpdateForm asset={editAsset} update={assetEdit} setEditAsset={setEditAsset} />
      <div className='py-5 font-bold text-textGray'>
        Overview
      </div>
      <div className="overflow-x-auto flex mb-5">
        {list?.map(sponsor => <SponsorRow key={sponsor.id} {...sponsor} onRemove={handleRemove} onCreateAsset={assetCreate} onRemoveAsset={assetRemove} onEditAsset={handleEdit} list={assetlist.filter(asset => asset.folder === sponsor.name && !asset.is_default)} />)}
      </div>
    </React.Fragment>
  )
}