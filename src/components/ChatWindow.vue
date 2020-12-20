<template>
    <div class="chat-window">
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messagesDiv">
            <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
                <span class="created-at">{{ doc.createdAt }}</span>
                <span class="name">{{ doc.user }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
    import {computed, ref, onUpdated} from "vue";
    import { formatDistanceToNow } from 'date-fns';
    import getCollection from "../composables/getCollection";
    import Spinner from "./Spinner";

    export default {
        name: "ChatWindow",
        components: {Spinner},
        setup() {
            const { error, documents } = getCollection('messages')
            const messagesDiv = ref(null)

            const formattedDocuments = computed(() => {
                if (documents.value) {
                    return documents.value.map(document => {
                        let time = formatDistanceToNow(document.createdAt.toDate())
                        return { ...document, createdAt: time}
                    })
                }
            })

            onUpdated(() => {
                (messagesDiv.value).scrollTop = (messagesDiv.value).scrollHeight
            })

            return { messagesDiv, error, documents, formattedDocuments }
        }
    }
</script>

<style scoped>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    .single {
        margin: 10px 0;
    }
    .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name {
        font-weight: bold;
        margin-right: 6px;
    }
    .messages {
        max-height: 330px;
        overflow-y: scroll;
    }
</style>