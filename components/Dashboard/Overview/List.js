import React, { useEffect } from 'react'

import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import BiLinkExternal from '@meronex/icons/bi/BiLinkExternal';
import MdcPencilOutline from '@meronex/icons/mdc/MdcPencilOutline';

import Modal from '../../Modal'
import UAssetForm from '../Assets/UpdateForm'
import USubtitleForm from '../SubtitleColors/UpdateForm'

import Container from '../../Container'
import AssetForm from '../../AssetForm';
import FontForm from '../../FontForm';
import ColorForm from '../../ColorForm';
import SubtitleForm from '../../SubtitleColorFrom';


import { updateCompany } from '../../../api'
import { userAgent } from 'next/server';



function UpdateForm({ asset, setEditAsset, update }) {
  return (
    <Modal isOpen={Boolean(asset)} onRequestClose={() => setEditAsset(null)} z="30">
      <div className="flex-row w-full">
        <h3 className="text-sm text-textGray font-bold mb-6">
          Update Asset
        </h3>

        <UAssetForm asset={asset} update={update} onSuccess={() => setEditAsset(null)} />
      </div>
    </Modal>
  )
}


function UpdateSubtitleForm({ subtitle, setEditAsset, update }) {
  return (
    <Modal isOpen={Boolean(subtitle)} onRequestClose={() => setEditAsset(null)} z="30">
      <div className="flex-row w-full">
        <h3 className="text-sm text-textGray font-bold mb-6">
          Update Subtitle Color
        </h3>

        <USubtitleForm color={subtitle} update={update} onSuccess={() => setEditAsset(null)} />
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

function OverlayRow({ asset, onRemove, onEdit }) {
  const { id, name, bundle_type, asset_type, asset_url, asset_thumb_url, company_id, is_default, folder } = asset;

  const overlayStyle = {
    width: '108px',
    height: '192px',
  };

  return (
    <div className="hover:bg-gray-100 p-5 pr-8 min-w-max flex justify-center items-center">
      {asset_thumb_url &&
        <img onClick={() => onEdit(asset)} style={overlayStyle} src={asset_thumb_url} alt="thumbnail" />
      }
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


function SubtitleColorsRow({ color, onRemove, onEdit, fontFamily }) {
  return (
    <div className="hover:bg-gray-100 pt-5 pl-5 flex justify-left">
      <div className="px-2 py-1 whitespace-nowrap text-base font-normal text-gray-900 rounded" onClick={() => onEdit(color)} style={{ fontFamily: fontFamily, backgroundColor: color.background, color: color.foreground }}>
        {color.company_font?.name}
      </div>
    </div>
  )
}

function SubtitleColorsListRow({ color, onRemove, onEdit, fontFamily }) {
  return (
    <div onClick={() => onEdit(color)} className="max-w-5xl hover:border-greenSqill-300 border-2 border-transparent content-center py-4 my-2 flex justify-center items-center  rounded-full bg-white">
      <div className="text-xs font-bold text-textGray w-1/3">
        {color.id}
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="px-2 py-1 border whitespace-nowrap items-center justify-center text-xs font-normal text-textGray rounded" style={{ fontFamily: fontFamily, backgroundColor: color.background, color: color.foreground }}>
          {color.company_font?.name}
        </div>
      </div>
      <div className="w-1/3 text-xs font-normal text-containerGray flex justify-center">
        <button onClick={() => onRemove(color.id)} > X</button>
      </div>
    </div>
  )
}


function FontRow({ id, name, font_url, onRemove, fontFamily }) {
  return (
    <div className="hover:bg-gray-100 pt-5 pl-5 flex justify-left">
      <div className="whitespace-nowrap font-normal rounded" style={{ fontFamily: fontFamily }}>{name}
      </div>
    </div>
  )
}

function FontListRow({ id, name, font_url, onRemove, fontFamily }) {
  return (
    <div className="max-w-5xl hover:border-greenSqill-300 border-2 border-transparent py-4 my-2 flex justify-center content-center items-center rounded-full bg-white">
      <div className="text-xs font-bold text-textGray w-1/3">
        {id}
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="whitespace-nowrap text-xs font-normal text-textGray rounded" style={{ fontFamily: fontFamily }}>{name}
        </div>
      </div>
      <div className="w-1/3 text-xs font-normal text-containerGray flex justify-center">
        <button onClick={() => onRemove(id)} > X</button>
      </div>
    </div>
  )
}

function ColorRow({ id, name, font_url, onRemove }) {
  const colorStyle = {
    backgroundColor: name,
    width: '20px',
    height: '20px',
    display: 'inline-block',
    marginRight: '8px',
  };

  return (
    <div className="hover:bg-gray-100 py-5 pl-5 flex justify-center items-center shrink-0">
      <div className="p-12 rounded-xl" style={colorStyle}>
        <div className='text-gray-400 text-sm flex items-center justify-center pt-4'>{name}</div>
      </div>
    </div>
  )
}

function ColorListRow({ id, name, font_url, onRemove }) {

  const colorStyle = {
    backgroundColor: name,
    width: '40px',
    height: '40px',
    display: 'inline-block',
  };

  return (
    <div className="max-w-5xl hover:border-greenSqill-300 border-2 border-transparent my-2 pt-1 items-center content-center justify-center flex rounded-full  bg-white">
      <div className="w-1/4 text-xs font-bold text-textGray">
        {id}
      </div>
      <div className="w-1/4 text-xs font-normal text-textGray flex justify-center">
        <div> {name} </div>
      </div>
      <div className="w-1/4 justify-center align-center items-center">
        <div className="rounded border" style={colorStyle}>
        </div>
      </div>
      <div className="w-1/4 text-xs font-normal text-containerGray flex justify-center">
        <button onClick={() => onRemove(name)} > X</button>
      </div>
    </div>
  )
}

function generateFontKey(fontUrl) {
  return `font_${fontUrl.replace(/\W/g, '')}`;
}

function generateDynamicStyle(fontUrl) {
  const fontName = `myDynamicFont_${Math.random().toString(36).substr(2, 9)}`;
  const style = `
    @font-face {
      font-family: '${fontName}';
      src: url('${fontUrl}') format('woff2');
    }
  `;

  return { style, fontName };
}



export default function OverviewList({ company, updateCompany, assetlist, assetCreate, assetRemove, assetEdit, fontList, fontCreate, fontFamilies, fontRemove, subtitleList, subtitleCreate, subtitleEdit, subtitleRemove }) {
  const [editAsset, setEditAsset] = React.useState(null)
  const [editSubtitle, setEditSubtitle] = React.useState(null)
  // const [loadedFonts, setLoadedFonts] = React.useState([]);
  // const [fontFamilies, setFontFamilies] = React.useState([]);
  const [colors, setColors] = React.useState(company.colors);

  const getFontFamily = (fontURL) => {
    const fontInfo = fontFamilies.find((item) => item.fontURL === fontURL);
    return fontInfo ? fontInfo.fontName : null;
  };

  useEffect(() => {
    // fontList.map(sponsor => {
    //   const fontURL = sponsor.font_url;
    //   const fontKey = generateFontKey(fontURL)

    //   if (!loadedFonts.includes(fontKey)) {
    //     const { style, fontName } = generateDynamicStyle(fontURL)

    //     const styleElement = document.createElement('style')
    //     styleElement.innerHTML = style
    //     document.head.appendChild(styleElement)

    //     setLoadedFonts((prevLoadedFonts) => [...prevLoadedFonts, fontKey])
    //     setFontFamilies((prevFontFamilies) => [...prevFontFamilies, { fontURL, fontName }])
    //   }
    // })
  }, [])

  async function RemoveColorCompany(colorToRemove) {
    const updatedColors = colors.filter((color) => color !== colorToRemove);
    company.colors = updatedColors;
    setColors(updatedColors);
    const res = await updateCompany(company);
    if (res?.success) {

    }
    else setStatus(res?.error || "An error occurred")

  }



  function handleAssetRemove(id) {
    assetRemove(id)
  }
  function handleFontRemove(id) {
    fontRemove(id)
  }
  function handleSubtitleRemove(id) {
    subtitleRemove(id)
  }
  function handleColorRemove(color) {
    RemoveColorCompany(color);
  }

  function handleEdit(asset) {
    setEditAsset(asset)
  }
  function handleSubtitleEdit(subtitle) {
    setEditSubtitle(subtitle)
  }

  return (
    <React.Fragment>
      <UpdateForm asset={editAsset} update={assetEdit} setEditAsset={setEditAsset} />
      <UpdateSubtitleForm subtitle={editSubtitle} update={subtitleEdit} setEditAsset={setEditSubtitle} />
      <div className='py-5 font-bold text-textGray'>
        Overview
      </div>
      <div className="flex flex-wrap mb-5">
        <div className='pr-5 w-2/6 max-w-full '>
          <Container
            title="Fonts"
            list={fontList}
            handleRemove={handleFontRemove}
            handleEdit={handleEdit}
            handleCreate={fontCreate}
            renderRows={fonts => fonts.map(sponsor =>
            (
              <FontRow key={sponsor.id} {...sponsor} onRemove={handleFontRemove} fontFamily={getFontFamily(sponsor.font_url)} />
            )
            )}
            renderList={fonts => fonts.map(sponsor =>
            (
              <FontListRow key={sponsor.id} {...sponsor} onRemove={handleFontRemove} fontFamily={getFontFamily(sponsor.font_url)} />
            )
            )}
            columns={["Element ID", "Name", "Delete"]}
            FormComponent={FontForm}
            containerClass={"overflow-auto h-96 mt-2 grid grid-cols-1 gap-4 content-start"}
            parentClass={'min-h-full'}
          />
        </div>
        <div className='pr-5 w-4/6 max-w-full"'>
          <Container
            title="Colors"
            list={colors}
            handleRemove={handleAssetRemove}
            handleEdit={handleEdit}
            handleCreate={updateCompany}
            renderRows={colors => colors.map((color, index) => (
              <ColorRow key={index} name={color} onRemove={handleColorRemove} onEdit={handleEdit} />
            ))}
            renderList={
              colors => colors.map((color, index) => (
                <ColorListRow key={index} id={index} name={color} onRemove={handleColorRemove} onEdit={handleEdit} />
              ))}
            columns={["Element ID", "Hex", "Preview", "Delete"]}
            FormComponent={ColorForm}
            containerClass={"overflow-x-auto h-40 grid grid-rows-1 grid-flow-col gap-4 content-start"}
            parentClass={'mb-5'}
          />
          <Container
            title="Logos"
            list={assetlist.filter(asset => asset.bundle_type === 'logos' && !asset.is_default && !asset.is_sponsor_asset)}
            handleRemove={handleAssetRemove}
            handleEdit={handleEdit}
            handleCreate={assetCreate}
            renderRows={assets => assets.map(asset => (
              <AssetRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
            ))}
            renderList={assets => assets.map(asset => (
              <AssetListRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
            ))}
            columns={["Element ID", "Name", "Thumbnail", "Delete"]}
            FormComponent={AssetForm}
            formProps={{ type: 'logos', format: 'image' }}
            containerClass={"overflow-x-auto h-40 grid grid-rows-1 grid-flow-col gap-4 content-start"}
            parentClass={''}
          />
        </div>
      </div>
      <div className="flex mb-5">
        <div className='pr-5 w-1/2 max-w-full '>
          <Container
            title="Banner"
            list={assetlist.filter(asset => asset.bundle_type === 'foreground' && !asset.is_default && !asset.is_sponsor_asset)}
            handleRemove={handleAssetRemove}
            handleEdit={handleEdit}
            handleCreate={assetCreate}
            renderRows={assets => assets.map(asset => (
              <AssetRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
            ))}
            renderList={assets => assets.map(asset => (
              <AssetListRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
            ))}
            columns={["Element ID", "Name", "Thumbnail", "Delete"]}
            FormComponent={AssetForm}
            formProps={{ type: 'foreground', format: 'image' }}
            containerClass={"py-5 overflow-x-auto h-80 grid grid grid-rows-2 grid-flow-col gap-4 content-start"}
            parentClass={''}
          />
        </div>
        <div className='pr-5 w-1/2 max-w-full '>
          <Container
            title="Overlay"
            list={assetlist.filter(asset => asset.bundle_type === 'overlay' && !asset.is_default && !asset.is_sponsor_asset)}
            handleRemove={handleAssetRemove}
            handleEdit={handleEdit}
            handleCreate={assetCreate}
            renderRows={assets => assets.map(asset => (
              <OverlayRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
            ))}
            renderList={assets => assets.map(asset => (
              <AssetListRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
            ))}
            columns={["Element ID", "Name", "Thumbnail", "Delete"]}
            FormComponent={AssetForm}
            formProps={{ type: 'overlay', format: 'image' }} 
            containerClass={"overflow-x-auto h-80 grid grid-rows-1 grid-flow-col gap-4 content-start"}
            parentClass={''}
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className='pr-5 w-2/6 max-w-full'>
          <Container
            title="Subtitle Colors"
            list={subtitleList}
            handleRemove={handleSubtitleRemove}
            handleEdit={handleSubtitleEdit}
            handleCreate={subtitleCreate}
            renderRows={colors => colors.map(sub => (
              <SubtitleColorsRow key={sub.id} color={sub} onRemove={handleSubtitleRemove} onEdit={handleSubtitleEdit} fontFamily={getFontFamily(sub.company_font.font_url)} />
            ))}
            renderList={colors => colors.map(sub => (
              <SubtitleColorsListRow key={sub.id} color={sub} onRemove={handleSubtitleRemove} onEdit={handleSubtitleEdit} fontFamily={getFontFamily(sub.company_font.font_url)} />
            ))}
            columns={["Element ID", "Caption Preview", "Delete"]}
            FormComponent={SubtitleForm}
            containerClass={"overflow-auto h-96 grid grid-cols-1 gap-4 content-start"}
            parentClass={''}
          />
        </div>
        <div className='pr-5 w-4/6 max-w-full rounded-xl bg-gray-100 mr-5'>

        </div>
      </div>
      <div className='pr-5 max-w-full rounded-xl bg-gray-100 mr-5 mb-4'>
        <Container
          title="Effects"
          list={assetlist.filter(asset => asset.asset_type === 'animation' && !asset.is_default && !asset.is_sponsor_asset)}
          handleRemove={handleAssetRemove}
          handleEdit={handleEdit}
          handleCreate={assetCreate}
          renderRows={assets => assets.map(asset => (
            <AssetRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
          ))}
          renderList={assets => assets.map(asset => (
            <AssetListRow key={asset.id} asset={asset} onRemove={handleAssetRemove} onEdit={handleEdit} />
          ))}
          columns={["Element ID", "Name", "Thumbnail", "Delete"]}
          FormComponent={AssetForm}
          formProps={{ type: 'effects', format: 'animation' }} 
          containerClass={"py-5 overflow-x-auto h-80 grid grid grid-rows-2 grid-flow-col gap-4 content-start"}
          parentClass={''}
        />
      </div>
    </React.Fragment>
  )
}