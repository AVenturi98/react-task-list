const tasks = [
	{
		id: 1,
		title: 'Implementare la homepage',
		priority: 1,
		estimatedTime: 120,
		state: 'completed',
	},
	{
		id: 2,
		title: 'Sviluppare il menu di navigazione',
		priority: 2,
		estimatedTime: 60,
		state: 'completed',
	},
	{
		id: 3,
		title: 'Creare il footer del sito',
		priority: 3,
		estimatedTime: 30,
		state: 'completed',
	},
	{
		id: 4,
		title: 'Ottimizzare le performance',
		priority: 1,
		estimatedTime: 180,
		state: 'completed',
	},
	{
		id: 5,
		title: 'Scrivere test per i componenti',
		priority: 2,
		estimatedTime: 90,
		state: 'completed',
	},
	{
		id: 6,
		title: 'Implementare la pagina dei contatti',
		priority: 3,
		estimatedTime: 60,
		state: 'completed',
	},
	{
		id: 7,
		title: 'Aggiungere animazioni CSS',
		priority: 2,
		estimatedTime: 30,
		state: 'backlog',
	},
	{
		id: 8,
		title: "Integrare l'API di autenticazione",
		priority: 1,
		estimatedTime: 120,
		state: 'in_progress',
	},
	{
		id: 9,
		title: 'Aggiornare la documentazione',
		priority: 3,
		estimatedTime: 60,
		state: 'backlog',
	},
	{
		id: 10,
		title: 'Rifattorizzare il codice CSS',
		priority: 2,
		estimatedTime: 90,
		state: 'in_progress',
	},
]

export default tasks

// console.log(tasks)

/*

Create il progetto react utilizzando Vite con i comandi visti in classe npm create vite@latest rispondendo a tutte le varie domande
installate le dipendenze npm install
e avviate il server in locale npm run dev

Prima di partire con l’esercizio ripulite il progetto del contenuto esistente (HTML e il CSS) in modo da partire da una pagina bianca.

Esercizio

Mostriamo in due liste diverse gli elementi dell’array tasks.

Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”.

Nella seconda lista mostriamo i task che hanno stato “completed”.

Infine riprodurre il layout lasciato in allegato.

BONUS

Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.

*/