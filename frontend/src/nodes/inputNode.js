// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="bg-zinc-300 min-h-20 min-w-[200px] space-y-2 rounded p-4">
      <div>
        <span className="font-bold uppercase">Input</span>
      </div>
      <div>
        <label className="gap-2 flex items-center">
          <span>Name:</span>
          <input
            className="bg-transparent border-b border-b-zinc-600 p-1 outline-none focus:border-b-blue-600 focus:bg-blue-100"
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label className="flex gap-2 items-center">
          Type:
          <select
            className="bg-transparent"
            value={inputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle 
      className="w-3 h-3 hover:bg-blue-600 origin-center ease-in-out duration-200"
      type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};
