import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const DocumentUpload = ({ isOpen, onClose }) => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentRemarks, setDocumentRemarks] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle document upload logic here
    console.log({
      documentName,
      documentType,
      documentRemarks,
      selectedFile
    });

    // Reset form
    setDocumentName('');
    setDocumentType('');
    setDocumentRemarks('');
    setSelectedFile(null);

    // Close modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">Upload Document</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <XMarkIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Document Name</label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Loan Agreement">Loan Agreement</option>
              <option value="Bank Statement">Bank Statement</option>
              <option value="ID Proof">ID Proof</option>
              <option value="Income Proof">Income Proof</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Document Type</label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="PDF">PDF</option>
              <option value="Image">Image</option>
              <option value="Document">Document</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Document Remarks</label>
            <textarea
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              value={documentRemarks}
              onChange={(e) => setDocumentRemarks(e.target.value)}
              rows="3"
            />
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">Select File</label>
            <div className="flex items-center justify-between rounded-md border border-gray-300 px-3 py-2 text-sm">
              <span className="text-gray-500">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
              <label className="cursor-pointer rounded-md bg-gray-100 px-3 py-1 text-sm font-medium hover:bg-gray-200">
                Choose file
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUpload;
