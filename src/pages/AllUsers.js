import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, ImageList, ImageListItem, ImageListItemBar, IconButton, Avatar } from "@mui/material";
import { ThumbUp, ThumbUpOffAlt, ThumbDown, ThumbDownOffAlt, Flag, EmojiFlags, Star, StarBorder } from '@mui/icons-material';


const AllUsers = () => {

    const navigate = useNavigate();
    const [image_count, setImageCount] = useState(17)
    const [col_count, setColCount] = useState(7)

    return (
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
                <ImageList sx={{ width: '100%', overflow: "hidden", height: (12 / col_count * 100 + 1) * Math.ceil(image_count / col_count) }} cols={col_count} rowHeight={12 / col_count * 100} gap={1}>
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
    );
};

export default AllUsers;