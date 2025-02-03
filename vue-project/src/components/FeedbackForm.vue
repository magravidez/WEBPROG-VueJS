<template>
    <div>
        <h2>Feedback</h2>
        <form @submit.prevent="submitComment">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required class="form-control">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required class="form-control">
            </div>
            <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea id="comment" v-model="comment" required class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div v-if="submissionStatus" class="mt-2">
                {{ submissionStatus }}
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';

const name = ref('');
const email = ref('');
const comment = ref('');
const submissionStatus = ref(null);

const supabaseUrl = 'https://yjjpkogdolikceuzbxij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqanBrb2dkb2xpa2NldXpieGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyMTksImV4cCI6MjA1MzU0NDIxOX0.eddLWa9XKyfl4eCNhNzJCCjFC3fOWa7qVAi7y8TQ_Mg';
const tableName = 'feedback';

const supabase = createClient(supabaseUrl, supabaseKey);

async function submitComment() {
    submissionStatus.value = "Submitting...";
    try {
        const { error } = await supabase
            .from(tableName)
            .insert([{ name: name.value, email: email.value, comment: comment.value }]);

        if (error) {
            console.error("Error inserting comment:", error);
            submissionStatus.value = "Error submitting comment. Please try again.";
        } else {
            submissionStatus.value = "Comment submitted successfully!";
            name.value = '';
            email.value = '';
            comment.value = '';
        }
    } catch (err) {
        console.error("An unexpected error occurred:", err);
        submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>