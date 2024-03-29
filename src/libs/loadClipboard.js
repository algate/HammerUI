 // #ifdef H5
 import ClipboardJS from "@/libs/clipboard.min.js"
 // #endif
 const HammerUI = {
     getClipboardData: function(data, callback) {
         // #ifdef APP-PLUS || MP
         uni.setClipboardData({
             data: data,
             success(res) {
                 uni.getClipboardData({
                     success(res) {
                         ("function" == typeof callback) && callback(true)
                     },
                     fail(res) {
                         ("function" == typeof callback) && callback(false)
                     }
                 })
             },
             fail(res) {
                 ("function" == typeof callback) && callback(false)
             }
         })
         // #endif
         // #ifdef H5
         let event = window.event || {}
         let clipboard = new ClipboardJS("", {
             text: () => data
         })
         clipboard.on('success', (e) => {
             ("function" == typeof callback) && callback(true)
             clipboard.off('success')
             clipboard.off('error')
             clipboard.destroy()
         });
         clipboard.on('error', (e) => {
             ("function" == typeof callback) && callback(false)
             clipboard.off('success')
             clipboard.off('error')
             clipboard.destroy()
         });
         clipboard.onClick(event)
         // #endif
     }
 };
 module.exports = {
     getClipboardData: HammerUI.getClipboardData
 };
