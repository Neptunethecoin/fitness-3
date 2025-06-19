function updateExerciseImage(name) {
  const imgElement = document.getElementById("exercise-img");
  const imagePath = "workouts/" + name.toLowerCase().replace(/ /g, "_") + ".jpg";
  imgElement.src = imagePath;
}