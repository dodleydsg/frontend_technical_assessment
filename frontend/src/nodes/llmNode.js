// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div className="bg-yellow-300 min-h-20 min-w-[200px] space-y-2 rounded p-4">
      <Handle
      className='w-3 h-3'
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
      className='w-3 h-3'
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div>
        <span className='font-bold uppercase'>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
      className='w-3 h-3 hover:bg-blue-600 origin-center ease-in-out duration-200'
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}
