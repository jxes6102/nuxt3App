// export default function () {
//     const count = ref(0)

//     const increment = () => {
//         count.value += 1
//     }

//     const subtraction = () => {
//         count.value -= 1
//     }

//     return {
//         count,
//         increment,
//         subtraction
//     }
// }

export const outMessage = () => {
    const count = ref(0)

    const increment = () => {
        count.value += 1
    }

    const subtraction = () => {
        count.value -= 1
    }

    return {
        count,
        increment,
        subtraction
    }
}