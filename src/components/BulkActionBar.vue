<template>
    <div class=bulk-action-bar>
        <span class="checkbox">
            <input type="checkbox"
                class="hover:animate-spin rounded-50"
                :class="[partialSelection ? 'bg-green' : '']"
                :checked="allChecked"
                :indeterminate="partialSelection"
                @click="bulkSelect" />
        </span>

        <span class="buttons">
            <button @click="emailSelection.markRead"
                    :disabled="Array.from(emailSelection.emails).every(e => e.read)" 
                    class="bg-blue-400 hover:animate-pulse">Mark Read</button>
            <button @click="emailSelection.markUnread" 
                    :disabled="Array.from(emailSelection.emails).every(e => !e.read)"
                    class="bg-green-400 hover:animate-pulse">Mark Unread</button>
            <button @click="emailSelection.archive" 
                    :disabled="numberSelected == 0"
                    class="bg-gray-400 hover:animate-spin">Archive</button>
        </span>
    </div>
</template>

<script lang="ts">
    import selectedEmails from '../composables/use-emails-selection'
    import { computed } from 'vue'

    export default {
        setup(props){
            let emailSelection = selectedEmails()
            let numberChecked = computed(() => emailSelection.emails.size)
            let numberOfEmails = props.emails.length
            let allChecked = computed(() => numberChecked.value === numberOfEmails)
            let partialSelection = computed(() => {
                return numberChecked.value > 0 && numberChecked.value < numberOfEmails
            })
            let bulkSelect = function() {
                if(allChecked.value) {
                    emailSelection.clear()
                } else {
                    emailSelection.addMultiple(props.emails)
                }
            }

            return {
                allChecked: false,
                emailSelection,
                partialSelection: true,
                bulkSelect
            }
        },
        props: {
            emails: {
                type: Array,
                required: true
            }
        }
    }
</script>