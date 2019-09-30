package lb.edu.mydr.utils;

import com.google.gson.Gson;

import java.io.IOException;

import lb.edu.mydr.classes.User;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class Network {

    private static final MediaType JSON = MediaType.get("application/json; charset=utf-8");
    private static OkHttpClient client = new OkHttpClient();
    private static final String url = "";

    public static void SaveUser(User user) throws IOException {
        Gson gson = new Gson();
        RequestBody body = RequestBody.create(JSON, gson.toJson(user));
        Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
        try (Response response = client.newCall(request).execute()) {
        }
    }
}
