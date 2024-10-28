// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-20 min-w-[200px] space-y-2 rounded p-4">
      <Handle
        className="w-3 h-3"
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div>
        <span className="font-bold uppercase">Output</span>
      </div>
      
        <label className="flex items-center">
          Name:
          <input
            className="bg-transparent border-b border-b-zinc-600 p-1 outline-none focus:border-b-blue-600 focus:bg-zinc-800"
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label className="flex items-center gap-2">
          <span>Type:</span>
          <select 
          className="bg-transparent"
          value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      
    </div>
  );
};
