export default function removeHeaderAndFooter() {
  // alert('looking for header and footer')
  const waitListID = document.getElementById("WaitlistForm");
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const bool = +document.contains(waitListID) ? true : false;
  if (bool) {
    console.log("Waitlist found");
    header.style.display = "none";
    footer.style.display = "none";
  } else {
    console.log("Waitlist not found");
  }
}

removeHeaderAndFooter()