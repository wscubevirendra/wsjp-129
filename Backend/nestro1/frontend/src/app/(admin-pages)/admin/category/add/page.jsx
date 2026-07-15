'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag, Link2, Upload, X, Save } from 'lucide-react';

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function AddCategoryPage() {
  const [name, setName]         = useState('');
  const [slug, setSlug]         = useState('');
  const [image, setImage]       = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    setSlug(slugify(val));
  };

  const processFile = (file) => {
    if (!file) return;
    const allowed = ['image/png', 'image/jpeg', 'image/webp'];
    if (!allowed.includes(file.type)) return alert('Only PNG, JPG, WEBP files are allowed.');
    if (file.size > 5 * 1024 * 1024) return alert('File size must be under 5MB.');
    setImage({ file, preview: URL.createObjectURL(file) });
  };

  const handleFileChange = (e) => processFile(e.target.files[0]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    processFile(e.dataTransfer.files[0]);
  }, []);

  const handleDragOver  = (e) => { e.preventDefault(); setDragging(true); };
  const handleDragLeave = () => setDragging(false);

  const handleRemoveImage = () => {
    if (image?.preview) URL.revokeObjectURL(image.preview);
    setImage(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Category name is required.');
    if (!image) return alert('Category image is required.');
    console.log({ name, slug, image: image.file });
    alert('Category saved! (connect to API)');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Back link */}
      <Link
        href="/admin/category"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-600 transition font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Categories
      </Link>

      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Add New Category</h1>
        <p className="text-sm text-gray-500 mt-0.5">Create a new product category for your store</p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-6 space-y-6">

          {/* Category Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800">
              Category Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="e.g., Electronics, Fashion, Mobiles"
                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 focus:bg-white transition-all placeholder:text-gray-400"
              />
            </div>
            <p className="text-xs text-gray-400">This is how customers will see the category</p>
          </div>

          {/* Slug */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800">Slug</label>
            <div className="relative">
              <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={slug}
                readOnly
                placeholder="auto-generated-slug"
                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed placeholder:text-gray-400"
              />
            </div>
            <p className="text-xs text-gray-400">URL-friendly name (auto-generated)</p>
          </div>

          {/* Category Image */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800">
              Category Image <span className="text-red-500">*</span>
            </label>

            {image ? (
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <img
                  src={image.preview}
                  alt="preview"
                  className="w-full h-52 object-contain"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-md border border-gray-200 hover:bg-red-50 hover:border-red-200 transition"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={[
                  'flex flex-col items-center justify-center gap-3 w-full h-44 rounded-xl border-2 border-dashed cursor-pointer transition-all',
                  dragging
                    ? 'border-teal-400 bg-teal-50'
                    : 'border-gray-200 bg-gray-50 hover:border-teal-400 hover:bg-teal-50/30',
                ].join(' ')}
              >
                <div className={`p-3 rounded-full transition ${dragging ? 'bg-teal-100' : 'bg-gray-100'}`}>
                  <Upload className={`w-6 h-6 ${dragging ? 'text-teal-500' : 'text-gray-400'}`} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Drag &amp; drop or click to upload</p>
                  <p className="text-xs text-gray-400 mt-0.5">PNG, JPG, WEBP (Max 5MB)</p>
                </div>
              </div>
            )}

            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Footer inside card */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <Link
            href="/admin/category"
            className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition shadow-sm shadow-teal-200"
          >
            <Save className="w-4 h-4" />
            Save Category
          </button>
        </div>
      </form>

    </div>
  );
}