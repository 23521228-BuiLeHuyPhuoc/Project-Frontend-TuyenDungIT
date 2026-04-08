import { Editor } from "@tinymce/tinymce-react";
export const EditorMCE = (
    props:{
        editorRef:any,
        initialValue?:string
    }
) => {
    const {editorRef,initialValue}=props;
return (
    <>
    <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue={initialValue}
            init={{
              height: 500,
              plugins:[
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 
                'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'help', 'wordcount'
              ],
              toolbar: `undo redo | blocks | ` +
                'bold italic forecolor | alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | removeformat | help',
              images_upload_url:`${process.env.NEXT_PUBLIC_API_URL}/upload/image`
              }}           

          />
    
    
    
    
    
    
    
    
    </>
)








}