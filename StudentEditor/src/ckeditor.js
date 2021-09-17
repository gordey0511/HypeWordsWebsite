/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';

class StudentEditor extends ClassicEditor {
}

// Plugins to include in the build.
StudentEditor.builtinPlugins = [
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
    WordCount
];

StudentEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            // 'link',
            // 'bulletedList',
            // 'numberedList',
            // '|',
            // 'indent',
            // 'outdent',
            '|',
            // 'blockQuote',
            // 'insertTable',
            'undo',
            'redo',
            'word-count',
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'ru',
}

class TeacherEditor extends ClassicEditor {
}


// Plugins to include in the build.
TeacherEditor.builtinPlugins = [
    Autoformat,
    BlockQuote,
    Bold,
    Essentials,
    FontBackgroundColor,
    FontColor,
    Heading,
    Highlight,
    Indent,
    Italic,
    Link,
    List,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    Table,
    TableToolbar,
    TextTransformation,
    Underline
];

TeacherEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'link',
            // 'bulletedList',
            // 'numberedList',
            // '|',
            // 'outdent',
            // 'indent',
            // '|',
            // 'blockQuote',
            // 'insertTable',
            '|',
            'removeFormat',
            'fontBackgroundColor',
            'fontColor',
            'highlight',
            '|',
            'undo',
            'redo',
            'word-count',
        ]
    },
    language: 'ru',
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
}
const editors = {StudentEditor, TeacherEditor};
export default editors;

