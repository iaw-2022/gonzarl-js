<template>
    <div class="footer d-flex justify-content-evenly bottom-0 left-0 w-full bg-black">
        <div class="company">
            © F1 Fantasy 2022 
        </div>
        <div class="logo">
            <img class="mx-auto" id="footer-logo" src="https://i.ibb.co/WFwShmV/dark-logo.png" alt="f1-fantasy=footer">
        </div>
        <div class="d-flex justify-content-center">
            <div class="instagram mx-2">
                <a href="https://www.instagram.com/f1/" class="instagram-icon">
                    <i class="bi bi-instagram"></i>
                </a>
            </div>
            <div class="twitter mx-2">
                <a href="https://twitter.com/F1" class="twitter-icon">
                    <i class="bi bi-twitter"></i>
                </a>
            </div>
            <div class="official-page mx-2">
                <a href="https://f1.com/" class="official-page">
                    <i class="bi bi-speedometer"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.footer{
    align-items: center;
    text-align: center;
}
.company{
    font-size: 24px;
    color: white;
}
#footer-logo{
    max-width:5vw;
}
.bi{
    font-size: 2em;
}
</style>