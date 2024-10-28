// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="bg-zinc-300 min-h-20 min-w-[200px] space-y-2 rounded p-4">
      <div>
        <span>Text</span>
      </div>

      <label className="flex gap-2 items-center">
        <span>Text:</span>
        <input
          className="bg-transparent border-b border-b-zinc-600 p-1 outline-none focus:border-b-blue-600 focus:bg-blue-100"
          type="text"
          value={currText}
          onChange={handleTextChange}
        />
      </label>

      <Handle
        className="w-3 h-3 hover:bg-blue-600 origin-center ease-in-out duration-200"
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
