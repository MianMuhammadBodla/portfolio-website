import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Worked as a Finance Secretary of Junior Biological Society (New. JBC) in My College Student at Forman Christian College (A Chartered University)",
      keywords: ["Finance Secretary"],
    },
    // {
    //   text: "",
    //   keywords: [""],
    // },
    // {
    //   text: "",
    //   keywords: [""],
    // },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
           <span className="text-AAsecondary">Finance Secretary</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2022 - Feb 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("http://www.fccsocieties.org/directory/junior-biological-society/?fbclid=IwZXh0bgNhZW0CMTAAAR2s_E6vIcZe3cD1AQvlrbl7YSBAP9AK1YrJf1ju_5tLWkT3x68IY-PQCZ0_aem_ZmFrZWR1bW15MTZieXRlcw", "_blank")}
          >
            JBS Website 
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
