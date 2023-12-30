<template>
    <v-container-fluid>
        <div class="image-row d-flex">
            <v-img :height="275" cover class="w-20" src="../assets/images/footer_cat.png"></v-img>
            <v-img :height="275" cover class="w-20" src="../assets/images/footer_spaceman.png"></v-img>
            <v-img :height="275" cover class="w-20" src="../assets/images/footer_triangles.png"></v-img>
            <v-img :height="275" cover class="w-20" src="../assets/images/footer_circle.png"></v-img>
            <v-img :height="275" cover class="w-20" src="../assets/images/footer_gril.png"></v-img>
        </div>
        <v-container class="footer-body">
           <v-row class="align-center justify-center">
                <v-col :cols="4">
                    <div class="footer-detail">
                        <v-img class="logo" :width="51" src="../public/vector.svg"> </v-img>
                        HJC
                    </div>
                </v-col>
                <v-col :cols="2"><div class="quick-links">Quick links</div></v-col>
                <v-col :cols="2"><div class="categories">Categories</div></v-col>
                <v-col :cols="4"><div class="footer-misc">Subscribe</div></v-col>
           </v-row>
        </v-container>
    </v-container-fluid>
</template>

<script></script>

<style>
.footer-body {
    padding-top: 5rem;
}
</style>
