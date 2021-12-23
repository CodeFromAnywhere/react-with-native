// import * as React from "react";

// import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
// import { MdLooksOne, MdLooksTwo } from "react-icons/md";
// import { ImCross, ImQuotesLeft } from "react-icons/im";
// import { FaImages, FaListOl, FaListUl } from "react-icons/fa";
// import { UploadIcon } from "@heroicons/react/outline";

// // Import the Slate components and React plugin.
// import { useCallback, useMemo, useRef, useState } from "react";
// import isHotkey from "is-hotkey";
// import {
//   Editable,
//   withReact,
//   useSlate,
//   Slate,
//   RenderElementProps,
// } from "slate-react";

// import {
//   Editor,
//   BaseEditor,
//   Transforms,
//   createEditor,
//   Descendant,
//   Element as SlateElement,
//   Node,
//   Text,
// } from "slate";
// import { withHistory } from "slate-history";
// import Image from "next/image";
// import { useSelector } from "react-redux";

// import { ReactEditor } from "slate-react";
// import { Button, Toolbar } from "./SlateComponents";
// import { IconType } from "react-icons";
// import H3 from "./Elements/H3";
// import Ul from "./Elements/Ul";
// import Ol from "./Elements/Ol";
// import Li from "./Elements/Li";
// import P from "./Elements/P";
// import H2 from "./Elements/H2";
// import Youtube from "./Elements/Youtube";

// import {
//   selectLoginToken,
//   isMobileDevice,
//   postMultipart,
//   shimmer,
//   toBase64,
// } from "@coworksurf/frontend";

// export const serializeToText = (nodes: Descendant[] | null) => {
//   return nodes ? nodes.map((n) => Node.string(n)).join("\n") : "";
// };

// const BlockQuote = ({
//   children,
//   attributes,
// }: {
//   children: any;
//   attributes?: any;
// }) => {
//   return (
//     <blockquote className={`ml-8`} {...attributes}>
//       {children}
//     </blockquote>
//   );
// };

// const Code = ({
//   children,
//   attributes,
// }: {
//   children: any;
//   attributes?: any;
// }) => {
//   return (
//     <div className={`bg-gray-900 ml-3 mr-3`}>
//       <code className={`ml-2 text-white`} {...attributes}>
//         {children}
//       </code>
//     </div>
//   );
// };

// export const serializeToStyledHtml = (nodes: Descendant[]) => {
//   return <span>{nodes?.map((n) => serializeNodeToStyledHtml(n))}</span>;
// };

// const serializeNodeToStyledHtml = (node: Descendant): JSX.Element => {
//   if (Text.isText(node)) {
//     let html = <span className="text-lg">{node.text}</span>;
//     if (node.bold) {
//       html = <strong>{html}</strong>;
//     }
//     if (node.code) {
//       html = <Code>{html}</Code>;
//     }
//     if (node.italic) {
//       html = <em>{html}</em>;
//     }
//     if (node.underline) {
//       html = <u>{html}</u>;
//     }
//     return html;
//   }

//   const children = node.children.map((n) => serializeNodeToStyledHtml(n));

//   switch (node.type) {
//     case "block-quote":
//       return <BlockQuote>{children}</BlockQuote>;
//     case "heading-one":
//       return <H2>{children}</H2>;
//     case "heading-two":
//       return <H3>{children}</H3>;
//     case "bulleted-list":
//       return <Ul>{children}</Ul>;
//     case "list-item":
//       return <Li>{children}</Li>;
//     case "numbered-list":
//       return <Ol>{children}</Ol>;

//     case "youtube":
//       return <Youtube videoId={node.videoId}>{children}</Youtube>;

//     case "images":
//       const amount = node.imagesCollection?.length;

//       const cols =
//         amount === 1
//           ? "grid-cols-1"
//           : amount === 2 || amount === 4
//           ? "grid-cols-2"
//           : "grid-cols-2 lg:grid-cols-3";

//       const renderForMobile = () => (
//         <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide lg:overflow-hidden">
//           {node.imagesCollection?.slice(0, 6).map((image, index) => (
//             <div key={`image${image}`} className={`w-80`}>
//               {/* NB: the outer div with w-80 is really important. */}
//               <div
//                 className={`relative w-80 h-80 m-0 md:m-2 overflow-hidden rounded-lg`}
//               >
//                 <Image
//                   src={typeof image === "string" ? image : image.url}
//                   layout="fill"
//                   className="object-cover p-0 m-0 transition rounded-lg"
//                   alt={`Coliving and Coworking by the Surf`}
//                   placeholder="blur"
//                   blurDataURL={
//                     (typeof image === "string" ? null : image.base64) ||
//                     `data:image/svg+xml;base64,${toBase64(shimmer(320, 320))}`
//                   }
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       );

//       const renderForDesktop = () => (
//         <div className={`grid ${cols} gap-2 mt-[30px] mb-4`}>
//           {node.imagesCollection?.slice(0, 6).map((image, index) => {
//             const url = typeof image === "string" ? image : image.url;
//             let height = null;
//             let rounded = null;
//             if (amount) {
//               if (amount === 1) {
//                 height = "h-40 md:h-60 lg:h-96";
//               } else if (amount === 2) {
//                 height = "lg:h-[334px] h-60";
//               } else {
//                 height = "h-60 lg:h-72";
//               }
//             }

//             if (amount) {
//               if (amount >= 6 && index === 0) {
//                 rounded = "lg:rounded-tl-2xl";
//               } else if (amount >= 6 && index === 2) {
//                 rounded = "lg:rounded-tr-2xl";
//               } else if (amount >= 6 && index === 3) {
//                 rounded = "lg:rounded-bl-2xl";
//               } else if (amount >= 6 && index === 5) {
//                 rounded = "lg:rounded-br-2xl";
//               }
//             }

//             if (amount) {
//               if (
//                 (amount == 2 && index === 0) ||
//                 (amount == 2 && index === 1)
//               ) {
//                 rounded = "lg:rounded-2xl";
//               }
//             }

//             if (amount) {
//               if (amount == 3 && index === 0) {
//                 rounded = "lg:rounded-tl-2xl lg:rounded-bl-2xl ";
//               } else if (amount == 3 && index === 2) {
//                 rounded = "lg:rounded-tr-2xl lg:rounded-br-2xl ";
//               }
//             }

//             if (amount) {
//               if (amount == 1 && index === 0) {
//                 rounded = "lg:rounded-2xl";
//               }
//             }

//             return (
//               <div
//                 key={`image${url}`}
//                 className={`relative w-full ${height} m-0 md:m-0 overflow-hidden ${rounded}`}
//               >
//                 <Image
//                   src={url}
//                   layout="fill"
//                   className="object-cover p-0 m-0"
//                   alt={`Coliving and Coworking by the Surf`}
//                   placeholder="blur"
//                   blurDataURL={
//                     (typeof image === "string" ? null : image.base64) ||
//                     `data:image/svg+xml;base64,${toBase64(shimmer(320, 320))}`
//                   }
//                 />
//               </div>
//             );
//           })}
//         </div>
//       );
//       return (
//         <div>
//           {isMobileDevice() ? renderForMobile() : renderForDesktop()}
//           {children}
//         </div>
//       );

//     default:
//       return <P>{children}</P>;
//   }
// };

// type Format = Types;

// type Types =
//   | "block-quote"
//   | "paragraph"
//   | "bulleted-list"
//   | "heading-one"
//   | "heading-two"
//   | "list-item"
//   | "numbered-list"
//   | "bold"
//   | "italic"
//   | "underline"
//   | "code"
//   | "images"
//   | "youtube";
// type CustomElement = {
//   type: Types;
//   videoId?: string; //youtube id
//   imagesCollection?: (
//     | string
//     | {
//         url: string;
//         base64: string | null;
//         width: number | null;
//         height: number | null;
//       }
//   )[]; //array of urls
//   children: CustomText[];
// };
// type CustomText = {
//   // type?: string;
//   text: string;
//   bold?: boolean;
//   italic?: boolean;
//   underline?: boolean;
//   code?: boolean;
// };

// declare module "slate" {
//   interface CustomTypes {
//     Editor: BaseEditor & ReactEditor;
//     Element: CustomElement;
//     Text: CustomText;
//   }
// }

// const HOTKEYS = {
//   "mod+b": "bold",
//   "mod+i": "italic",
//   "mod+u": "underline",
//   "mod+`": "code",
// };

// const LIST_TYPES = ["numbered-list", "bulleted-list"];

// const toggleBlock = (editor: Editor, format: Format) => {
//   const isActive = isBlockActive(editor, format);
//   const isList = LIST_TYPES.includes(format);

//   Transforms.unwrapNodes(editor, {
//     match: (n) =>
//       LIST_TYPES.includes(
//         !Editor.isEditor(n) && SlateElement.isElement(n) ? n.type : ""
//       ),
//     split: true,
//   });
//   const newProperties: Partial<SlateElement> = {
//     type: isActive ? "paragraph" : isList ? "list-item" : format,
//   };
//   Transforms.setNodes(editor, newProperties);

//   if (!isActive && isList) {
//     const block = { type: format, children: [] };
//     Transforms.wrapNodes(editor, block);
//   }
// };

// const addBlock = (editor: Editor, format: Format) => {
//   const newNode: SlateElement = {
//     type: format,
//     children: [{ text: "" }],
//   };

//   if (format === "images") {
//     newNode.imagesCollection = [];
//   }

//   Transforms.insertNodes(editor, newNode);
// };

// const toggleMark = (editor: Editor, format: Format) => {
//   const isActive = isMarkActive(editor, format);

//   if (isActive) {
//     Editor.removeMark(editor, format);
//   } else {
//     Editor.addMark(editor, format, true);
//   }
// };

// const isBlockActive = (editor: Editor, format: Format) => {
//   //@ts-ignore
//   const [match] = Editor.nodes(editor, {
//     match: (n) =>
//       !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
//   });

//   return !!match;
// };

// const isMarkActive = (editor: Editor, format: string) => {
//   const marks = Editor.marks(editor);
//   //@ts-ignore
//   return marks ? marks[format] === true : false;
// };

// const Element = ({
//   attributes,
//   children,
//   element,
//   editor,
// }: RenderElementProps & { editor: Editor }) => {
//   const inputFile = useRef<HTMLInputElement>(null);
//   const loginToken = useSelector(selectLoginToken);
//   const [imageLoading, setImageLoading] = useState(false);

//   switch (element.type) {
//     case "block-quote":
//       return <BlockQuote attributes={attributes}>{children}</BlockQuote>;
//     case "bulleted-list":
//       return <Ul attributes={attributes}>{children}</Ul>;
//     case "heading-one":
//       return <H2 attributes={attributes}>{children}</H2>;
//     case "heading-two":
//       return <H3 attributes={attributes}>{children}</H3>;
//     case "list-item":
//       return <Li attributes={attributes}>{children}</Li>;
//     case "numbered-list":
//       return <Ol attributes={attributes}>{children}</Ol>;
//     case "images":
//       const selectImage = () => {
//         // `current` points to the mounted file input element
//         inputFile.current?.click();
//       };

//       const getImagesAndUpload = async (
//         e: React.ChangeEvent<HTMLInputElement>
//       ) => {
//         const files = e.target.files;
//         if (files && files.length > 0) {
//           let urls: (
//             | string
//             | { url: string; base64: string; width: number; height: number }
//           )[] = [];

//           for (let n = 0; n < files.length; n++) {
//             const file = files.item(n);
//             if (file) {
//               const image = await uploadFile(file);
//               if (image?.url) {
//                 urls = [
//                   ...urls,
//                   {
//                     url: image?.url,
//                     base64: image?.base64,
//                     width: image?.width,
//                     height: image?.height,
//                   },
//                 ];
//               }
//             }

//             const path = ReactEditor.findPath(editor, element);

//             console.log("PATH", path);
//             //delete the current node with images, this one
//             Transforms.removeNodes(editor, { at: path });

//             //add the same node, but with an additional image
//             const newImagesCollection =
//               element.imagesCollection?.map((x) =>
//                 typeof x === "string"
//                   ? { url: x, base64: null, width: null, height: null }
//                   : x
//               ) || [];
//             Transforms.insertNodes(
//               editor,
//               [
//                 {
//                   type: "images",
//                   children: element.children,
//                   imagesCollection: element.imagesCollection
//                     ? [...newImagesCollection, ...urls]
//                     : urls,
//                 },
//               ],
//               { at: path }
//             );
//           }
//         }
//       };
//       const uploadFile = async (file: File) => {
//         const contentType = file.type; // eg. image/jpeg or image/svg+xml

//         if (!loginToken) {
//           return;
//         }
//         setImageLoading(true);

//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("loginToken", loginToken);
//         const response = await postMultipart("uploadImage", formData);

//         setImageLoading(false);
//         if (response.success) {
//           //change it here
//           return {
//             url: response.url,
//             base64: response.base64,
//             width: response.width,
//             height: response.height,
//           };
//         } else {
//           alert(response.response);
//         }
//       };
//       const deleteImage = (url: string) => {
//         const path = ReactEditor.findPath(editor, element);

//         Transforms.removeNodes(editor, { at: path });
//         Transforms.insertNodes(
//           editor,
//           [
//             {
//               type: "images",
//               children: [{ text: "" }],
//               imagesCollection:
//                 element.imagesCollection?.filter((x) =>
//                   typeof x === "string" ? x !== url : x.url !== url
//                 ) || [],
//             },
//           ],
//           { at: path }
//         );
//       };

//       const deleteBlock = () => {
//         const path = ReactEditor.findPath(editor, element);

//         Transforms.removeNodes(editor, { at: path });
//       };

//       return (
//         <div>
//           <div
//             contentEditable={false}
//             className={`flex flex-wrap lg:pr-10 md:pr-5`}
//           >
//             {element.imagesCollection?.map((image) => {
//               const url = typeof image === "string" ? image : image.url;
//               return (
//                 <div
//                   contentEditable={false}
//                   key={`image${image}`}
//                   className="relative h-[176px] w-[250px] mr-4 mb-4"
//                 >
//                   <Image
//                     src={url}
//                     layout="fill"
//                     className="object-cover rounded-xl"
//                     alt={`Coliving and Coworking by the Surf`}
//                     placeholder="blur"
//                     blurDataURL={
//                       (typeof image === "string" ? null : image.base64) ||
//                       `data:image/svg+xml;base64,${toBase64(shimmer(320, 320))}`
//                     }
//                   />
//                   <div
//                     onClick={() => deleteImage(url)}
//                     className={`cursor-pointer absolute bg-gray-200 opacity-45 hover:bg-gray-400 flex justify-center items-center w-6 h-6 rounded-2xl -right-2 -top-2`}
//                   >
//                     <ImCross color="#F9FAFB" size="14" />
//                   </div>
//                 </div>
//               );
//             })}
//             <div
//               contentEditable={false}
//               className="relative flex items-center justify-start h-[176px] w-[250px] bg-white border rounded-xl"
//             >
//               <div
//                 onClick={deleteBlock}
//                 className={`cursor-pointer absolute bg-gray-200 opacity-45 hover:bg-gray-400 flex justify-center items-center w-6 h-6 rounded-2xl -right-2 -top-2`}
//               >
//                 <ImCross color="white" size="14" />
//               </div>
//               <div
//                 onClick={selectImage}
//                 className={`h-full cursor-pointer hover:underline w-11/12 flex justify-center items-center`}
//               >
//                 <div className="flex">
//                   <UploadIcon className="h-[18px] w-[18px]" />
//                   <b className="ml-2 text-sm">Upload Photo(s)</b>
//                 </div>
//               </div>
//             </div>
//             <input
//               multiple
//               type="file"
//               id="file"
//               ref={inputFile}
//               onChange={getImagesAndUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <div contentEditable={true}>{children}</div>
//         </div>
//       );
//     case "youtube":
//       return (
//         <Youtube attributes={attributes} videoId={element.videoId}>
//           {children}
//         </Youtube>
//       );
//     default:
//       //"paragraph"
//       return <P attributes={attributes}>{children}</P>;
//   }
// };

// const Leaf = ({
//   attributes,
//   children,
//   leaf,
// }: {
//   attributes: any;
//   children: any;
//   leaf: any;
// }) => {
//   if (leaf.bold) {
//     children = <strong>{children}</strong>;
//   }

//   if (leaf.code) {
//     children = <Code>{children}</Code>;
//   }

//   if (leaf.italic) {
//     children = <em>{children}</em>;
//   }

//   if (leaf.underline) {
//     children = <u>{children}</u>;
//   }

//   return <span {...attributes}>{children}</span>;
// };

// const BlockButton = ({ format, icon }: { format: Format; icon: IconType }) => {
//   const editor = useSlate();
//   const Icon = icon;
//   return (
//     <Button
//       active={isBlockActive(editor, format)}
//       onMouseDown={(event: any) => {
//         event.preventDefault();
//         toggleBlock(editor, format);
//       }}
//     >
//       <Icon size={20} color={"#34D399"} />
//     </Button>
//   );
// };

// const AfterBlockButton = ({
//   format,
//   icon,
// }: {
//   format: Format;
//   icon: IconType;
// }) => {
//   const editor = useSlate();
//   const Icon = icon;
//   return (
//     <Button
//       active={isBlockActive(editor, format)}
//       onMouseDown={(event: any) => {
//         event.preventDefault();
//         addBlock(editor, format);
//       }}
//     >
//       <Icon size={20} color={"#34D399"} />
//     </Button>
//   );
// };

// const MarkButton = ({ format, icon }: { format: Format; icon: IconType }) => {
//   const editor = useSlate();
//   const Icon = icon;
//   return (
//     <Button
//       active={isMarkActive(editor, format)}
//       onMouseDown={(event: any) => {
//         event.preventDefault();
//         toggleMark(editor, format);
//       }}
//     >
//       <Icon size={20} color={"#34D399"} />
//     </Button>
//   );
// };

// const RichTextArea = ({
//   value,
//   onChange,
//   editableStyle,
//   headerSticky,
//   headerComponent,
// }: {
//   value: Descendant[];
//   onChange: (value: Descendant[]) => void;
//   editableStyle?: object;
//   headerSticky?: boolean;
//   headerComponent?: any;
// }) => {
//   const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
//   const editor = useMemo(() => {
//     const _editor = withHistory(withReact(createEditor()));
//     _editor.isVoid = (el) => el.type === "youtube";
//     return _editor;
//   }, []);
//   const renderElement = useCallback(
//     (props) => <Element {...props} editor={editor} />,
//     [editor]
//   );

//   // console.log("VALUE", value);
//   return (
//     <div className={`flex-1 relative`}>
//       <Slate
//         editor={editor}
//         value={value}
//         onChange={(value) => onChange(value)}
//       >
//         <div className="relative">
//           <div className={`sticky top-0 z-10 bg-gray-50`}>
//             {headerComponent}
//             <Toolbar>
//               <MarkButton format="bold" icon={BiBold} />
//               <MarkButton format="italic" icon={BiItalic} />
//               <MarkButton format="underline" icon={BiUnderline} />
//               {/* <MarkButton format="code" icon={BiCode} /> */}
//               <BlockButton format="heading-one" icon={MdLooksOne} />
//               <BlockButton format="heading-two" icon={MdLooksTwo} />
//               <BlockButton format="block-quote" icon={ImQuotesLeft} />
//               <BlockButton format="numbered-list" icon={FaListOl} />
//               <BlockButton format="bulleted-list" icon={FaListUl} />
//               <AfterBlockButton format="images" icon={FaImages} />
//             </Toolbar>
//           </div>
//           <Editable
//             style={editableStyle || { overflow: "scroll", height: 400 }}
//             renderElement={renderElement}
//             renderLeaf={renderLeaf}
//             placeholder="Enter some text..."
//             spellCheck
//             autoFocus
//             onKeyDown={(event) => {
//               //from https://github.com/ianstormtaylor/slate/issues/97#issuecomment-569561247 <-- makes sure you go out to a new paragraph when hitting enter.

//               if (event.key === "Enter") {
//                 const selectedElement =
//                   editor.selection &&
//                   (Node.descendant(
//                     editor,
//                     editor.selection.anchor.path.slice(0, -1)
//                   ) as CustomElement);

//                 // Fill in herethe type of the element which you wish to "break out" from
//                 if (
//                   selectedElement?.type &&
//                   ["heading-one", "heading-two", "images"].includes(
//                     selectedElement?.type
//                   )
//                 ) {
//                   event.preventDefault();
//                   const selectedLeaf =
//                     editor.selection &&
//                     Node.descendant(editor, editor.selection.anchor.path);

//                   //@ts-ignore
//                   const atBeginning = editor.selection.anchor.offset === 0;
//                   const atEnd =
//                     //@ts-ignore
//                     selectedLeaf.text.length === editor.selection.anchor.offset;
//                   if (atEnd) {
//                     console.log("Just insertNodes");
//                     Transforms.insertNodes(editor, {
//                       type: "paragraph",
//                       children: [{ text: "" }],
//                     });
//                   } else if (atBeginning) {
//                     Transforms.setNodes(editor, {
//                       children: [{ text: "" }],
//                     });
//                     let afterPath = editor.selection?.anchor.path;
//                     if (afterPath?.[0]) {
//                       afterPath[0] = afterPath[0] + 2;
//                     }

//                     Transforms.insertNodes(
//                       editor,
//                       {
//                         type: "paragraph",
//                         //@ts-ignore
//                         children: [{ text: selectedLeaf?.text }],
//                       },
//                       { at: afterPath }
//                     );

//                     console.log("we're at beginning. what to do?");
//                   } else {
//                     console.log("Split nodes");
//                     Transforms.splitNodes(editor);
//                     Transforms.setNodes(editor, {
//                       type: "paragraph",
//                     });
//                   }
//                 }
//               }

//               //make hotkeys like cmd+B work
//               for (const hotkey in HOTKEYS) {
//                 if (isHotkey(hotkey, event as any)) {
//                   event.preventDefault();
//                   //@ts-ignore
//                   const mark = HOTKEYS[hotkey];
//                   toggleMark(editor, mark);
//                 }
//               }
//             }}
//             onPaste={(event) => {
//               const pastedText = event.clipboardData?.getData("text")?.trim();
//               const youtubeRegex =
//                 /^(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(?:\S+)?$/;
//               const matches = pastedText.match(youtubeRegex);
//               if (matches != null) {
//                 // the first regex match will contain the entire url,
//                 // the second will contain the first capture group which is our video id
//                 const [_, videoId] = matches;
//                 event.preventDefault();
//                 Transforms.insertNodes(editor, [
//                   {
//                     type: "youtube",
//                     videoId,
//                     children: [{ text: "" }],
//                   },
//                 ]);
//               }
//             }}
//           />
//         </div>
//       </Slate>
//     </div>
//   );
// };

// export default RichTextArea;
