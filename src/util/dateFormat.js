export default function formatDate(timestamp){
    return new Date(timestamp*1000).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}