<template>
    <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image">
  <div class="p-4 md:p-5">
   <span class="text-sm text-gray-800">{{ filename }}</span>
    <a :href="fileUrl(filename)" target="_blank" class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      View
    </a>
  </div>
</div>
    <!-- <div>
        <span class="text-sm text-gray-800">{{ filename }}</span>
        <a :href="fileUrl(filename)" target="_blank"
            class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View
        </a>
    </div> -->
        
</template>

<script>
export default{
props:['filename']
    // files:{
    //     type: Object,
    //     require:true,
    //     default:()=>({
            
    //     })
    // }
    
,
methods:{
    fileUrl(filename) {
    return `http://172.23.1.130:3000/files/${filename}`;
},
}

}
</script>
