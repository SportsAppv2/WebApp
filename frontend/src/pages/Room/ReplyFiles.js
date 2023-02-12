import React, { useEffect, useRef, useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import "./ReplyFiles.css";
// import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { replyActions } from "../../store/replySlice";
import EmojiPicker from "emoji-picker-react";


const ReplyFiles = () => {
    const data = useSelector((state) => state.reply);
    const dispatch = useDispatch();
    const inputFile = useRef("");
    const onClicking = (event) => {
        if (event.target.classList.contains("image")) {
        inputFile.current.children[0].children[1].click();
        } else {
        inputFile.current.children[1].children[1].click();
        }
    };
    const showFiles = (event) => {
        if (event.target.files[0]) {
            return event.target.files[0].name;
        }
    };

    useEffect(() => {
        if (data.files == "") {
            if (inputFile.current.children[0].children[1].value == "") {
                inputFile.current.children[1].children[1].value = "";
            } else {
                inputFile.current.children[0].children[1].value = "";
            }
        }
    }, [data.files]);

    const [emojiKeyboard, setEmojiKeyboard] = useState(false);

    console.log(data);

    return (
        <>
            <div>
                <div className="flex justify-between text-gray-600 text-[20px]">
                    <div className="flex items-center" ref={inputFile}>
                        <div className="singleIcon hover:bg-[#000000]">
                        <BsImage
                            className="image mx-2 hover:text-blue-60 "
                            onClick={(e) => onClicking(e)}
                        />
                        <input
                            type="file"
                            id="file1"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) =>
                            dispatch(replyActions.filesAdded(showFiles(e)))
                            }
                        />
                        </div>
                        <div className="singleIcon hover:bg-[#000000]">
                        <AiOutlineVideoCamera
                            className="video mx-2  hover:text-blue-60"
                            onClick={(e) => onClicking(e)}
                        />
                        <input
                            type="file"
                            id="file2"
                            className="hidden"
                            accept="video/*"
                            onChange={(e) =>
                            dispatch(replyActions.filesAdded(showFiles(e)))
                            }
                        />
                        </div>
                        <div className="singleIcon relative hover:bg-[#000000]">
                        <GrEmoji
                            className="mx-2  hover:text-blue-60"
                            onClick={(e) => setEmojiKeyboard(!emojiKeyboard)}
                        />
                        {emojiKeyboard ? (
                            <div className="emoji-container absolute top-[-480px]  mb-[-450px]">
                            <EmojiPicker
                                width={300}
                                emojiStyle="Google"
                                theme="dark"
                                onEmojiClick={(e) =>
                                dispatch(replyActions.emojiAdded(e.emoji))
                                }
                            />
                            </div>
                            ) : (
                            ""
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
};

export default ReplyFiles;