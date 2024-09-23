<template>
  <div class="pdf-button-container">
    <button class="print-pdf-button" @click="printPDF" :disabled="isLoading">Print PDF</button>
    <button class="print-doc-button" @click="printDoc" :disabled="isLoading">Print Word</button>
    <iframe v-if="docUrl" :src="docUrl" width="100%" height="600px"></iframe>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      docUrl: '',
      isLoading: false,
      error: null,
      scriptUrl: 'https://script.google.com/macros/s/AKfycbzJTm4l2Fkco9_UyGjnpnLniMpOfQ4DkiYGTVi7F6sG_E3h9UOECm_tO5IKqJCWgtd0/exec'
    };
  },
  methods: {
    async printPDF() {
      this.isLoading = true;
      this.error = null;
      try {
        console.log('Google Script URL:', this.scriptUrl); // Debugging
        const response = await axios.get(this.scriptUrl);
        const data = response.data;

        if (data.pdfUrl) {
          const link = document.createElement('a');
          link.href = data.pdfUrl;
          link.download = data.pdfName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error('No PDF URL returned');
          this.error = 'Failed to generate PDF.';
        }
      } catch (error) {
        console.error('Error generating PDF:', error);
        this.error = 'Error generating PDF.';
      } finally {
        this.isLoading = false;
      }
    },
    async printDoc() {
      this.isLoading = true;
      this.error = null;
      this.docUrl = ''; // Clear any previous URL
      try {
        console.log('Google Script URL:', this.scriptUrl); // Debugging
        const response = await axios.get(this.scriptUrl);
        const data = response.data;

        if (data.docUrl) {
          this.docUrl = data.docUrl;
        } else {
          console.error('No Document URL returned');
          this.error = 'Failed to generate Document.';
        }
      } catch (error) {
        console.error('Error generating Document:', error);
        this.error = 'Error generating Document.';
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style scoped>
.pdf-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.print-pdf-button,
.print-doc-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin: 10px;
}

.print-pdf-button:hover,
.print-doc-button:hover {
  background-color: #0056b3;
}

.print-pdf-button:active,
.print-doc-button:active {
  transform: scale(0.98);
}

.print-pdf-button:disabled,
.print-doc-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 10px;
}

iframe {
  margin-top: 20px;
}
</style>
