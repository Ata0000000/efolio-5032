<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">User Information Form</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" 
                             @blur = "() => validateName(true)"
                             @input = "() => validateName(false)"
                            v-model="formData.username">
                            <div v-if ="errors.username" class = "text-danger">{{ errors.username }}</div>
                        </div>
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"  v-model="formData.password">
                            <small v-if="!validations.password" class="text-danger">Password must be between 4 and 10 characters.</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="isAustralian" v-model="formData.isAustralian" required>
                                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                            </div>
                            <small v-if="!validations.isAustralian" class="text-danger">Please indicate if you are an Australian Resident.</small>
                        </div>
                        <div class="col-md-6">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" required v-model="formData.gender">
                                <option value="" disabled>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <small v-if="!validations.gender" class="text-danger">Please select a gender.</small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="reason" class="form-label">Reason for joining</label>
                        <textarea class="form-control" id="reason" rows="3" required v-model="formData.reason"></textarea>
                        <small v-if="!validations.reason" class="text-danger">Please provide a reason for joining.</small>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" 
                                @click="clearForm">Clear</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mt-5" v-if="submittedCards.length">
            <div class="d-flex flex-wrap justify-content-start">
                <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        User Information
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Username: {{ card.username }}</li>
                        <li class="list-group-item">Password: {{ card.password }}</li>
                        <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
                        <li class="list-group-item">Gender: {{ card.gender }}</li>
                        <li class="list-group-item">Reason: {{ card.reason }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: ''
});

const submittedCards = ref([]);
const submitForm =()=>{
    validateName(true);
    if(!errors.value.username){
        submittedCards.value.push({ ...formData.value});
        clearForm();
    }
}

const validations = ref({
    password: true,
    isAustralian: true,
    gender: true,
    reason: true
});



const clearForm = () => {
    formData.value = {
        username: '',
        password: '',
        isAustralian: false,
        reason: '',
        gender: ''
    };
};
const errors = ref({
    username:null,
    passwaord:null,
    resident:null,
    gender:null,
    reason:null,
});
const validateName = (blur) =>{
    if (formData.value.username.length < 3) {
        if (blur) errors.value.username = "Name must be at least 3 characters";
    } else {
        errors.value.username = null;
    }
    }

</script>

<style scoped>
   .card {
   border: 1px solid #ccc;
   border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   width:100%;
   }
   @media (max-width: 767.98px) { 
    .col-md-6 {
        flex: 0 0 auto;
        width: 50%;
    }
}
   
   .card-header {
   background-color: #275FDA;
   color: white;
   padding: 10px;
   border-radius: 10px 10px 0 0;
   }
   .list-group-item {
   padding: 10px;
   }
   .text-danger {
       font-size: 0.875em;
   }
</style>
