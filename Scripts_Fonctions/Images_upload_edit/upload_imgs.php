<div id="dragAndDropFiles" class="uploadArea">
<h1>Drop Images Here</h1>
</div>
<form name="demoFiler" id="demoFiler" enctype="multipart/form-data">
<input type="file" name="multiUpload" id="multiUpload" multiple />
<input type="submit" name="submitHandler" id="submitHandler" value="Upload" />
</form>
<div class="progressBar">
<div class="status"></div>
</div>


<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/multiupload.js"></script>
<script type="text/javascript">
var config = {
// Valid file formats
support : "image/jpg,image/png,image/bmp,image/jpeg,image/gif",
form: "demoFiler", // Form ID
dragArea: "dragAndDropFiles", // Upload Area ID
uploadUrl: "upload.php" // Server side file url
}
//Initiate file uploader.
$(document).ready(function()
{
initMultiUploader(config);
});
</script>