/**
 * Created by shawn on 3/30/14.
 */

function injectLastModified(id)
{
    document.getElementById(id).innerHTML = "Last modified: " + document.lastModified.split(" ")[0];
}
