import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, ImageList, ImageListItem, ImageListItemBar, IconButton, Avatar, Dialog, Divider } from "@mui/material";
import { ThumbUp, ThumbUpOffAlt, ThumbDown, ThumbDownOffAlt, Flag, EmojiFlags, Star, StarBorder, Close, ArrowBackIos, ArrowForwardIos, Edit, Facebook, YouTube, Twitter, LinkedIn } from '@mui/icons-material';

const AllImages = () => {

    const navigate = useNavigate()
    const [image_count, setImageCount] = useState(17)
    const [col_count, setColCount] = useState(7)
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <div className="flex flex-col m-10">
                <div className="flex flex-col text-center gap-10">
                    <Typography variant="subtitle1" component="span">
                        Conjure is a Community for AI genereating art where User can upload there best creation to be rated by other users.<br /> We are building a community around this new and amazing form of art where humans work with AIs to make cool images
                    </Typography>
                    <Typography variant="h3" component="h3">
                        Top 3 Images
                    </Typography>
                </div>
                <div className="flex flex-col mt-10 ">
                    <div className="flex flex-row mt-3 text-center mb-3">
                        <div className="basis-1/3">
                            <Typography variant="h4" component="h4">
                                Image of Month
                            </Typography>
                        </div>
                        <div className="basis-1/3">
                            <Typography variant="h4" component="h4">
                                Image of Week
                            </Typography>
                        </div>
                        <div className="basis-1/3">
                            <Typography variant="h4" component="h4">
                                Image of Day
                            </Typography>
                        </div>
                    </div>
                    <ImageList className="" sx={{ width: '100%', height: 400 }} cols={3} rowHeight={400} gap={1}>
                        <ImageListItem key={"month_imge"} className="text-center">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-10`}>
                                <div className="basis-1/4 flex items-center">
                                    <span className={`text-[40px]`}>
                                        Image title
                                    </span>
                                </div>
                                <div className="basis-2/4">

                                </div>
                                <div className="basis-1/4 flex flex-row justify-end items-center gap-20">
                                    <span className={` text-[30px]`}>
                                        User name
                                    </span>
                                    <Avatar alt="" src="./static/images/avatar.png" />
                                </div>
                            </div>
                        </ImageListItem>

                        <ImageListItem key={"week_image"} className="text-center">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-10`}>
                                <div className="basis-1/4 flex items-center">
                                    <span className={`text-[40px]`}>
                                        Image title
                                    </span>
                                </div>
                                <div className="basis-2/4">

                                </div>
                                <div className="basis-1/4 flex flex-row justify-end items-center gap-20">
                                    <span className={` text-[30px]`}>
                                        User name
                                    </span>
                                    <Avatar alt="" src="./static/images/avatar.png" />
                                </div>
                            </div>
                        </ImageListItem>

                        <ImageListItem key={"day_image"} className="text-center">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-10`}>
                                <div className="basis-1/4 flex items-center">
                                    <span className={`text-[40px]`}>
                                        Image title
                                    </span>
                                </div>
                                <div className="basis-2/4">

                                </div>
                                <div className="basis-1/4 flex flex-row justify-end items-center gap-20">
                                    <span className={` text-[30px]`}>
                                        User name
                                    </span>
                                    <Avatar alt="" src="./static/images/avatar.png" />
                                </div>
                            </div>
                        </ImageListItem>
                    </ImageList>
                </div>
                <div className="flex flex-row mt-1">
                    <ImageList variant="masonry" sx={{ width: '100%', overflow: "hidden" }} cols={col_count} gap={1}>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_image.png" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_image.png" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_image.png" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_image.png" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                        <ImageListItem key={""} className="">
                            <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="object-cover !h-full w-full"
                            />
                            <div className={`hover:opacity-100 top-0 opacity-0 absolute w-full h-full flex flex-col bg-black/[.3] text-white p-${Math.floor(24 / col_count)}`}>
                                <div className="basis-1/4 flex flex-row items-center">
                                    <span className={`basis-5/6 text-[${Math.floor(108 / col_count)}px]`}>
                                        Image title
                                    </span>
                                    <div className="basis-1/6">
                                        <StarBorder sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} />
                                        {/* <Star sx={{ fontSize: Math.floor(144 / col_count), color: "yellow" }} /> */}
                                    </div>
                                </div>
                                <div className={`basis-2/4 flex flex-row justify-center gap-${Math.floor(36 / col_count)} items-center`}>
                                    <ThumbUpOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} />
                                    {/* <ThumbUp sx={{ fontSize: Math.floor(144 / col_count), color: "green" }} /> */}
                                    <ThumbDownOffAlt sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} />
                                    {/* <ThumbDown sx={{ fontSize: Math.floor(144 / col_count), color: "red" }} /> */}
                                    <EmojiFlags sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} />
                                    {/* <Flag sx={{ fontSize: Math.floor(144 / col_count), color: "white" }} /> */}
                                </div>
                                <div className="basis-1/4 flex items-center">
                                    <span className={` text-[${Math.floor(72 / col_count)}px]`}>
                                        User name
                                    </span>
                                </div>
                            </div>
                        </ImageListItem>
                    </ImageList>

                </div>
            </div>
            <Dialog
                fullWidth={true}
                maxWidth={"xl"}
                open={open}
            >
                <div className="h-[800px] m-10 flex flex-col">
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Close />
                    </IconButton>
                    <div className="flex flex-row h-full">
                        <div className="basis-3/4 h-full flex flex-row">
                            <div className="basis-1/5 flex justify-center items-center">
                                <ArrowBackIos />
                            </div>
                            <div className="basis-3/5 relative">
                                <img alt="" src="./static/images/home_item.jpg" loading="lazy" className="absolute object-cover h-full w-full"
                                />
                            </div>
                            <div className="basis-1/5 flex justify-center items-center">
                                <ArrowForwardIos />
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className="basis-1/4 flex flex-col m-5 gap-3">
                            <div className="flex flex-row items-center">
                                <span className="basis-4/5 text-[24px]">Image title</span>
                                <Edit className="basis-1/5" />
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <Avatar alt="" src="./static/images/avatar.png" />
                                <span className={`text-[20px]`}>User name</span>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div className="basis-1/3 flex gap-2 justify-center">
                                    <ThumbUp />
                                    <span>0 Up</span>
                                </div>
                                <div className="basis-1/3 flex gap-2 justify-center">
                                    <ThumbDown />
                                    <span>0 Down</span>
                                </div>
                                <div className="basis-1/3 flex gap-2 justify-center">
                                    <Flag />
                                    <span>0 Flag</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div className="basis-1/4 flex flex-col gap-2 items-center">
                                    <Facebook />
                                    <span>Facebook</span>
                                </div>
                                <div className="basis-1/4 flex flex-col gap-2 items-center">
                                    <YouTube />
                                    <span>YouTube</span>
                                </div>
                                <div className="basis-1/4 flex flex-col gap-2 items-center">
                                    <Twitter />
                                    <span>Twitter</span>
                                </div>
                                <div className="basis-1/4 flex flex-col gap-2 items-center">
                                    <LinkedIn />
                                    <span>LinkedIn</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[20px]">Text Prompt</span>
                                <span className="text-[16px] text-center">text prompt</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[20px]">Note</span>
                                <span className="text-[16px] text-center">note</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[20px]">Engine</span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[18px] ml-5">Name</span>
                                    <span className="text-[16px] text-center">engine1</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[18px] ml-5">Seed</span>
                                    <span className="text-[16px] text-center">seed</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[18px] ml-5">CfgScale</span>
                                    <span className="text-[16px] text-center">cfg_scale</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[18px] ml-5">Sampler</span>
                                    <span className="text-[16px] text-center">sampler</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[18px] ml-5">Steps</span>
                                    <span className="text-[16px] text-center">steps</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[18px] ml-5">Demensions</span>
                                    <span className="text-[16px] text-center">demensions x y</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default AllImages;