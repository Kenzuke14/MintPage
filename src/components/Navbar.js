import React from 'react'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <div className="mx-auto md:mx-0">
                <a href="/" className='cursor-hand'>
                    <img className="w-40" src={require('../assets/logo.png')} alt="" draggable={false} />
                </a>
            </div>
            <div className="space-x-8 hidden md:flex items-center" style={{
                background: '#ffffffa6',
                backdropFilter: 'blur(5px)',
                padding: '1rem 2rem',
                borderRadius: '12px'
            }}>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/angelsproject_nft"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-instagram iconLink"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg> </a>

                <a href="https://discord.com/invite/EQqNeQmhep" target='_blank' rel="noreferrer">
                    <svg width="30" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M42.3271 3.1592C39.1403 1.69694 35.7229 0.619619 32.1498 0.00258835C32.0847 -0.0093201 32.0197 0.0204397 31.9862 0.0799609C31.5467 0.861661 31.0599 1.88145 30.7189 2.683C26.8758 2.10765 23.0525 2.10765 19.2882 2.683C18.9472 1.86363 18.4427 0.861661 18.0012 0.0799609C17.9677 0.0224257 17.9027 -0.00733418 17.8376 0.00258835C14.2665 0.617647 10.8491 1.69497 7.66028 3.1592C7.63268 3.1711 7.60901 3.19096 7.59331 3.21673C1.11123 12.9008 -0.66448 22.3469 0.206625 31.6758C0.210567 31.7215 0.236187 31.7651 0.271663 31.7929C4.54835 34.9336 8.69106 36.8403 12.7568 38.1041C12.8219 38.1239 12.8908 38.1001 12.9323 38.0465C13.894 36.7332 14.7513 35.3483 15.4864 33.892C15.5298 33.8067 15.4884 33.7055 15.3997 33.6717C14.0399 33.1559 12.745 32.527 11.4994 31.8127C11.4009 31.7552 11.393 31.6143 11.4837 31.5468C11.7458 31.3504 12.008 31.146 12.2582 30.9397C12.3035 30.902 12.3666 30.8941 12.4199 30.9179C20.6027 34.6539 29.4616 34.6539 37.5478 30.9179C37.6011 30.8921 37.6642 30.9001 37.7114 30.9377C37.9618 31.1441 38.2239 31.3504 38.488 31.5468C38.5786 31.6143 38.5727 31.7552 38.4742 31.8127C37.2286 32.5408 35.9337 33.1559 34.5719 33.6698C34.4832 33.7035 34.4438 33.8067 34.4872 33.892C35.238 35.3463 36.0954 36.7311 37.0394 38.0446C37.0788 38.1001 37.1497 38.1239 37.2148 38.1041C41.3003 36.8403 45.443 34.9336 49.7196 31.7929C49.7571 31.7651 49.7808 31.7234 49.7847 31.6778C50.8273 20.8925 48.0385 11.5239 42.3921 3.2187C42.3783 3.19096 42.3547 3.1711 42.3271 3.1592ZM16.7084 25.9955C14.2448 25.9955 12.2149 23.7337 12.2149 20.956C12.2149 18.1784 14.2054 15.9166 16.7084 15.9166C19.231 15.9166 21.2413 18.1982 21.2018 20.956C21.2018 23.7337 19.2113 25.9955 16.7084 25.9955ZM33.3224 25.9955C30.8589 25.9955 28.8289 23.7337 28.8289 20.956C28.8289 18.1784 30.8194 15.9166 33.3224 15.9166C35.8451 15.9166 37.8553 18.1982 37.8159 20.956C37.8159 23.7337 35.8451 25.9955 33.3224 25.9955Z"
                            fill="#0D0D0D"
                        />
                    </svg>
                </a>
                <a href="https://twitter.com/AngelsProj_NFT/" target='_blank' rel="noreferrer">
                    <svg width="30" viewBox="0 0 47 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.5255 38.4615C31.9537 38.4615 41.4865 23.6622 41.4865 10.8298C41.4865 10.4086 41.4865 9.99046 41.4588 9.57392C43.313 8.20123 44.9134 6.49685 46.1857 4.54669C44.4584 5.33242 42.6226 5.84773 40.7453 6.07492C42.7219 4.86081 44.2023 2.95334 44.9111 0.702592C43.05 1.83388 41.0153 2.6323 38.893 3.06069C35.3045 -0.849139 29.3026 -1.03857 25.4854 2.63931C23.026 5.01077 21.9799 8.54654 22.7442 11.9191C15.1259 11.5263 8.02711 7.83896 3.21453 1.77307C0.699715 6.21065 1.98599 11.8855 6.14965 14.735C4.64169 14.69 3.16603 14.2739 1.84743 13.5213V13.6446C1.84975 18.2668 5.02965 22.2467 9.44965 23.1627C8.0548 23.5532 6.59073 23.6098 5.1728 23.3282C6.41292 27.2853 9.97153 29.9957 14.0243 30.0738C10.669 32.7766 6.52377 34.2442 2.25618 34.2395C1.50335 34.2371 0.750519 34.1921 0 34.0998C4.33453 36.9493 9.37573 38.4615 14.5255 38.4545"
                            fill="#0D0D0D"
                        />
                    </svg>
                </a>
                <a href="/">
                    <svg width="30" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.30064 28.512L3.49474 28.2069L15.201 9.8939C15.3721 9.6257 15.7743 9.65351 15.9038 9.94471C17.8594 14.3277 19.547 19.7786 18.7564 23.1721C18.4189 24.5683 17.4942 26.4593 16.4539 28.2069C16.3199 28.4612 16.1719 28.7109 16.0147 28.9513C15.9408 29.0622 15.8159 29.127 15.6818 29.127H3.64274C3.31904 29.127 3.12954 28.7756 3.30064 28.512Z"
                            fill="#0D0D0D"
                        />
                        <path
                            d="M50 28.7625V31.375C50 31.525 49.9083 31.6583 49.775 31.7166C48.9584 32.0667 46.1625 33.35 45 34.9666C42.0333 39.0958 39.7667 45 34.7 45H13.5625C6.07083 45 0 38.9083 0 31.3917V31.15C0 30.95 0.16249 30.7875 0.362472 30.7875H12.1458C12.3792 30.7875 12.55 31.0041 12.5292 31.2333C12.4458 32 12.5875 32.7833 12.95 33.4958C13.65 34.9166 15.1 35.8042 16.6666 35.8042H22.5V31.25H16.7333C16.4375 31.25 16.2625 30.9083 16.4333 30.6666C16.4959 30.5708 16.5667 30.4708 16.6417 30.3583C17.1875 29.5834 17.9667 28.3791 18.7416 27.0083C19.2708 26.0834 19.7834 25.0958 20.1958 24.1042C20.2792 23.925 20.3458 23.7417 20.4125 23.5624C20.525 23.2458 20.6417 22.95 20.7249 22.6542C20.8083 22.4042 20.875 22.1417 20.9417 21.8958C21.1375 21.0542 21.2208 20.1625 21.2208 19.2375C21.2208 18.875 21.2041 18.4959 21.1708 18.1333C21.1542 17.7375 21.1042 17.3417 21.0542 16.9458C21.0208 16.5958 20.9584 16.25 20.8917 15.8875C20.8083 15.3583 20.6917 14.8334 20.5583 14.3042L20.5125 14.1042C20.4125 13.7417 20.3291 13.3958 20.2125 13.0333C19.8833 11.8958 19.5042 10.7875 19.1042 9.75C18.9584 9.33751 18.7916 8.94169 18.625 8.54587C18.3792 7.94998 18.1292 7.40834 17.9 6.89582C17.7834 6.66249 17.6833 6.44998 17.5834 6.23333C17.4708 5.98747 17.3542 5.74171 17.2375 5.50829C17.1542 5.32913 17.0583 5.16249 16.9916 4.99585L16.2792 3.67916C16.1792 3.5 16.3458 3.28749 16.5416 3.34165L21 4.55002H21.0125C21.0208 4.55002 21.025 4.55416 21.0292 4.55416L21.6166 4.71665L22.2625 4.89996L22.5 4.96665V2.31669C22.5 1.03749 23.525 0 24.7916 0C25.425 0 26 0.25829 26.4125 0.679163C26.825 1.10004 27.0834 1.67502 27.0834 2.31669V6.25L27.5583 6.38329C27.5958 6.39582 27.6333 6.41249 27.6666 6.43745C27.7833 6.52496 27.95 6.6542 28.1625 6.81245C28.3291 6.94583 28.5083 7.10833 28.725 7.27496C29.1542 7.62085 29.6666 8.06669 30.2292 8.57913C30.3791 8.70836 30.525 8.84165 30.6583 8.97503C31.3833 9.64996 32.1958 10.4417 32.9708 11.3167C33.1875 11.5625 33.4 11.8125 33.6166 12.075C33.8334 12.3417 34.0625 12.6042 34.2625 12.8667C34.525 13.2167 34.8083 13.5791 35.0542 13.9584C35.1708 14.1375 35.3042 14.3208 35.4166 14.5C35.7333 14.9792 36.0125 15.475 36.2792 15.9708C36.3917 16.2 36.5083 16.45 36.6083 16.6958C36.9041 17.3583 37.1375 18.0333 37.2875 18.7084C37.3334 18.8542 37.3666 19.0125 37.3833 19.1542V19.1874C37.4333 19.3875 37.45 19.6 37.4667 19.8167C37.5333 20.5083 37.5 21.2 37.3499 21.8958C37.2875 22.1917 37.2041 22.4708 37.1042 22.7667C37.0041 23.05 36.9041 23.3458 36.775 23.625C36.525 24.2041 36.2292 24.7833 35.8791 25.325C35.7667 25.525 35.6333 25.7375 35.5 25.9374C35.3542 26.15 35.2041 26.35 35.0708 26.5459C34.8875 26.7959 34.6917 27.0583 34.4916 27.2916C34.3125 27.5375 34.1291 27.7833 33.9292 28C33.65 28.3291 33.3833 28.6417 33.1042 28.9417C32.9375 29.1375 32.7583 29.3375 32.575 29.5167C32.3958 29.7166 32.2125 29.8958 32.0458 30.0624C31.7667 30.3416 31.5333 30.5583 31.3375 30.7375L30.8791 31.1583C30.8125 31.2166 30.725 31.25 30.6333 31.25H27.0834V35.8042H31.55C32.55 35.8042 33.5 35.45 34.2667 34.8C34.5291 34.5708 35.675 33.5791 37.0292 32.0834C37.075 32.0333 37.1333 31.9958 37.2 31.9792L49.5375 28.4125C49.7667 28.3458 50 28.5208 50 28.7625Z"
                            fill="#0D0D0D"
                        />
                    </svg>
                </a>
            </div>
        </nav>
    )
}
