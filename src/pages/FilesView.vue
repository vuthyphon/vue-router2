
<template>
    <div class="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">Uploaded PDF Files</h2>

        <!-- <div v-if="loading" class="text-center text-gray-500">Loading files...</div>

        <div v-else-if="files.length === 0" class="text-center text-gray-500">
            No files uploaded yet.
        </div>

        <ul v-else class="divide-y divide-gray-200">
            <li v-for="file in files" :key="file" class="py-3 flex justify-between items-center">
                <span class="text-sm text-gray-800">{{ file }}</span>
                <a :href="fileUrl(file)" target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    View
                </a>
            </li>
        </ul> -->
<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"></div>
    <div v-if="loading" class="text-center text-gray-500">Loading files...</div>

    <div v-else-if="files.length === 0" class="text-center text-gray-500">
        No files uploaded yet.
    </div>

    <div v-else class="grid grid-cols-4 gap-4">
        <FileComponents v-for="(file,index) in files" :key="index" :filename="file"/>
    </div>
</div>
        

</template>

<script>
import axios from 'axios';
import FileComponents from '@/components/docs/FileComponents.vue';
export default {
    name: 'FilesView',
    components:{
        FileComponents
    },
    data() {
        return {
            files: [],
            loading: true,
        };
    },
    methods: {
        async fetchFiles() {
            try {
                const res = await axios.get('http://172.23.1.130:3000/files');
                this.files = res.data;
            } catch (err) {
                console.error('Failed to fetch files:', err);
            } finally {
                this.loading = false;
            }
        },
        fileUrl(filename) {
            return `http://172.23.1.130:3000/files/${filename}`;
        },
    },
    mounted() {
        this.fetchFiles();
    },
};
</script>