'use client'

import { useState, useRef } from 'react'
import { createArticle } from '@/app/dashboard/actions'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function ArticleForm() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [content, setContent] = useState('')
    const [isPreview, setIsPreview] = useState(false)

    const handleFormat = (type: 'bold' | 'italic' | 'list' | 'quote') => {
        const textarea = textareaRef.current
        if (!textarea) return

        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const text = textarea.value
        const before = text.substring(0, start)
        const after = text.substring(end)
        const selection = text.substring(start, end)

        let newText = ''
        let newCursorPos = 0

        switch (type) {
            case 'bold':
                newText = `${before}**${selection}**${after}`
                newCursorPos = end + 2 + (selection ? 2 : 0) // adjusted cursor logic
                if (!selection) newCursorPos = start + 2
                break
            case 'italic':
                newText = `${before}*${selection}*${after}`
                newCursorPos = end + 1 + (selection ? 1 : 0)
                if (!selection) newCursorPos = start + 1
                break
            case 'quote':
                newText = `${before}\n> ${selection}${after}`
                newCursorPos = end + 3
                break
            case 'list':
                newText = `${before}\n- ${selection}${after}`
                newCursorPos = end + 3
                break
        }

        setContent(newText)
        textarea.value = newText
        textarea.focus()
        textarea.setSelectionRange(newCursorPos, newCursorPos)
    }

    return (
        <div className="w-full max-w-3xl bg-[#F5F5F5] rounded-xl shadow-lg p-8 mx-auto">
            <h2 className="text-2xl font-normal text-center mb-8 text-black">Add Information</h2>

            <form action={createArticle} className="space-y-6">
                {/* Subject Field */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center">
                    <label className="text-black text-lg">Subject</label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="w-full h-10 px-4 rounded-lg border border-gray-300 bg-[#F5F5F5] focus:outline-none focus:border-gray-500 transition-colors text-black"
                    />
                </div>

                {/* Summary Field */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-start">
                    <label className="text-black text-lg pt-2">Summary</label>
                    <div className="w-full">
                        {/* Toolbar */}
                        <div className="flex items-center justify-between bg-[#9CA3AF] p-2 rounded-t-lg px-4">
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => handleFormat('bold')}
                                    className="font-serif font-bold text-xl text-black hover:opacity-70 disabled:opacity-30"
                                    title="Bold"
                                    disabled={isPreview}
                                >
                                    B
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFormat('italic')}
                                    className="font-serif italic font-bold text-xl text-black hover:opacity-70 disabled:opacity-30"
                                    title="Italic"
                                    disabled={isPreview}
                                >
                                    I
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFormat('quote')}
                                    className="hover:opacity-70 disabled:opacity-30"
                                    title="Quote"
                                    disabled={isPreview}
                                >
                                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFormat('list')}
                                    className="hover:opacity-70 disabled:opacity-30"
                                    title="List"
                                    disabled={isPreview}
                                >
                                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4 6h2v2H4V6zm0 5h2v2H4v-2zm0 5h2v2H4v-2zM8 6h12v2H8V6zm0 5h12v2H8v-2zm0 5h12v2H8v-2z" />
                                    </svg>
                                </button>
                            </div>
                            {/* Preview Toggle */}
                            <div className="flex bg-gray-200 rounded p-1 gap-1">
                                <button
                                    type="button"
                                    onClick={() => setIsPreview(false)}
                                    className={`px-3 py-1 text-xs font-medium rounded transition-all ${!isPreview ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}
                                >
                                    Write
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsPreview(true)}
                                    className={`px-3 py-1 text-xs font-medium rounded transition-all ${isPreview ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}
                                >
                                    Preview
                                </button>
                            </div>
                        </div>

                        {/* Editor Area */}
                        <div className="relative w-full rounded-b-lg border border-t-0 border-gray-300 bg-[#F5F5F5] overflow-hidden min-h-[200px]">
                            {isPreview ? (
                                <div className="w-full p-4 prose prose-sm max-w-none text-black">
                                    {content ? (
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {content}
                                        </ReactMarkdown>
                                    ) : (
                                        <p className="text-gray-400 italic">Nothing to preview</p>
                                    )}
                                </div>
                            ) : (
                                <textarea
                                    ref={textareaRef}
                                    name="content"
                                    required
                                    rows={8}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full p-4 h-full min-h-[200px] bg-transparent focus:outline-none focus:border-gray-500 resize-y text-black block"
                                />
                            )}
                        </div>
                         {/* Hidden input to ensure value is sent even if in preview mode (though textarea is controlled so mostly ok, but safer to keep state synced) */}
                         <input type="hidden" name="content_copy" value={content} /> 
                    </div>
                </div>

                {/* Schedule Upload */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center mt-8">
                    <label className="text-black text-lg leading-tight">Schedule<br />upload</label>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="relative">
                            <input
                                type="date"
                                name="date"
                                required
                                className="w-full h-10 px-4 rounded-lg border border-gray-300 bg-[#F5F5F5] text-gray-500 focus:outline-none focus:border-gray-500"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="time"
                                name="time"
                                required
                                className="w-full h-10 px-4 rounded-lg border border-gray-300 bg-[#F5F5F5] text-gray-500 focus:outline-none focus:border-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Image Upload */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center mt-4">
                    <label className="text-black text-lg">Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-black hover:file:bg-gray-300 transition-all"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-8 pt-4">
                    <button
                        type="submit"
                        className="px-8 py-2 bg-[#6B6B6B] text-white font-bold rounded hover:bg-[#555555] transition-colors"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="px-8 py-2 bg-transparent border border-gray-400 text-[#4A4A4A] font-bold rounded hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
