# @ehfuse/toolbar-icons

React SVG icons for editor-style toolbars. One set shared by [`@ehfuse/editor`](https://github.com/ehfuse/editor),
[`@ehfuse/outliner` and `@ehfuse/mindmap`](https://github.com/ehfuse/mindmap) so their toolbars look the same.

```bash
npm install @ehfuse/toolbar-icons
```

```tsx
import { BoldIcon, UndoIcon, FontColorIcon } from "@ehfuse/toolbar-icons";

<BoldIcon width={20} />
<FontColorIcon barColor="#d93025" />
```

Icons draw with `currentColor` (set the color on the button). Every icon takes normal SVG props; `width` defaults to 16–20px.
`FontColorIcon` / `FontFillIcon` take `barColor` for the color bar under the glyph.

| Group | Icons |
| --- | --- |
| Text | `BoldIcon` `ItalicIcon` `UnderlineIcon` `StrikeIcon` `SubscriptIcon` `SuperscriptIcon` `FontColorIcon` `FontFillIcon` `RemoveFormatIcon` `LineHeightIcon` |
| Paragraph | `AlignLeftIcon` `AlignCenterIcon` `AlignRightIcon` `IndentIcon` `OutdentIcon` `ListBulletIcon` `ListNumberIcon` `QuoteIcon` `CodeIcon` |
| Insert | `LinkIcon` `ImageIcon` `TableIcon` `YoutubeIcon` `HtmlIcon` `DocumentIcon` |
| History · view | `UndoIcon` `RedoIcon` `FullScreenIcon` `ExitFullScreenIcon` `ZoomInIcon` `ZoomOutIcon` `FitCenterIcon` |
| Mind map | `BranchBothIcon` `BranchRightIcon` `BranchLeftIcon` `ChildBranchIcon` `SiblingBranchIcon` `PencilIcon` `TrashIcon` |

License: MIT
