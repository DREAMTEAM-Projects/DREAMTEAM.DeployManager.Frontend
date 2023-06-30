import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAoXDkOTT7V0rqfpSADi3AhN4iL2EexRCM',
  authDomain: 'hackaton-einstein.firebaseapp.com',
  projectId: 'hackaton-einstein',
  storageBucket: 'hackaton-einstein.appspot.com',
  messagingSenderId: '97886121484',
  appId: '1:97886121484:web:74cb68f556bb53281c8829'
}
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export type UploadInput = {
  path?: string
  filename: string
  file: Blob | ArrayBuffer
}

export class StorageService {
  private static instance: StorageService

  private constructor() {
    // construct private
  }

  public static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService()
    }

    return StorageService.instance
  }

  public async uplodaFile(input: UploadInput): Promise<string> {
    const imageRef = ref(storage, input.path ?? `/docs/${input.filename}`)
    await uploadBytes(imageRef, input.file)

    return await getDownloadURL(imageRef)
  }
}
