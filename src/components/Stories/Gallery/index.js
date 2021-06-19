import React from 'react';
import { 
    GalleryGrid,
    GalleryGridItem,
    GalleryDesc,
    GalleryDate,
    GalleryH2,
    GalleryP,
    GalleryBtn,
} from './GalleryElements';

function Gallery({data}) {
    return (
        <GalleryGrid>
            {data.map((props,index)=>{
                return(
                    <GalleryGridItem bg={props.img} key={index}>
                        <GalleryDesc>
                            <GalleryDate>{props.date}</GalleryDate>
                            <GalleryH2>{props.title}</GalleryH2>
                            <GalleryP>{props.author}</GalleryP>
                            <GalleryBtn>
                            read story
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="12">
                                <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                            </svg>
                        </GalleryBtn>
                        </GalleryDesc>
                    </GalleryGridItem>
                )
            })}
        </GalleryGrid>
    )
}

export default Gallery
