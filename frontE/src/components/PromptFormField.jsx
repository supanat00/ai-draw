import React from 'react';

const PromptFormField = ({
  disabled,
  type,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  isTranTexts,
  handleTranTexts,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
      {isTranTexts && (
        <button
          type="button"
          onClick={handleTranTexts}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Tran texts
        </button>
      )}
    </div>
    <input
      type={type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      disabled={disabled}
    />
  </div>
);

export default PromptFormField;
