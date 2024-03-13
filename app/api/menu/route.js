
export async function MenuTree(){
    const res = await fetch("https://clubbe.online/json/menu.json")
    return res.json()
}