/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js'

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js'
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js'
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js'
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js'
import Link from '@ckeditor/ckeditor5-link/src/link.js'
import List from '@ckeditor/ckeditor5-list/src/list.js'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js'
import Table from '@ckeditor/ckeditor5-table/src/table.js'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js'
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js'
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'

class StudentEditor extends ClassicEditor {}

// Plugins to include in the build.
const commonPlugins = [
  Autoformat,
  AutoLink,
  BlockQuote,
  Bold,
  Code,
  Essentials,
  Heading,
  Indent,
  Italic,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  CKFinder,
  UploadAdapter,
  MediaEmbed,
]

const commonConfig = {
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  image: {
    // configure image toolbar
    // CKeditor uses the new style buttons
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
    ],

    styles: {
      options: [
        // this option is equal to the situation when style is not applied
        'full',

        // style to align-left image
        'alignLeft',

        // style to align-right image
        'alignRight',
      ],
    },
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'ru',
  ckfinder: {
    // uploading images to the server using the CKFinder QuickUpload command
    uploadUrl: '/api/upload-image?command=QuickUpload&type=Files&responseType=json',
  },
  mediaEmbed: {
    previewsInData: true,
  },
}

StudentEditor.builtinPlugins = [...commonPlugins, WordCount]

StudentEditor.defaultConfig = {
  ...commonConfig,
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'imageUpload',
      'mediaEmbed',
      '|',
      'indent',
      'outdent',
      '|',
      'blockQuote',
      'insertTable',
      'undo',
      'redo',
      'word-count',
    ],
  },
}

class TeacherEditor extends ClassicEditor {}

// Plugins to include in the build.
TeacherEditor.builtinPlugins = [
  ...commonPlugins,
  FontBackgroundColor,
  FontColor,
  Highlight,
  Indent,
  RemoveFormat,
]

TeacherEditor.defaultConfig = {
  ...commonConfig,
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'link',
      'bulletedList',
      'numberedList',
      'imageUpload',
      'mediaEmbed',
      '|',
      'outdent',
      'indent',
      '|',
      'blockQuote',
      'insertTable',
      '|',
      'removeFormat',
      'fontBackgroundColor',
      'fontColor',
      'highlight',
      '|',
      'undo',
      'redo',
    ],
  },
}
const editors = { StudentEditor, TeacherEditor }
export default editors
